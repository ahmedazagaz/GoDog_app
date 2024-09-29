import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import * as DocumentPicker from "expo-document-picker";
import { router } from "expo-router"
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { icons } from "../../constants";

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    video: null,
    thumbnail: null,
    prompt: ""
  });

  
  const openPicker = async (selectType) => {
    const result = await DocumentPicker.getDocumentAsync
    ({
       type: selectType === "image"
       ? ["image/png", "image/jpg"]
       : ["video/mp4", "video/gif"]
    })

    if(!result.canceled) {
      if(selectType === "image"){
        setForm({ ...form, thumbnail: result.assets[0]})
      }
      if(selectType === "video"){
        setForm({ ...form, video: result.assets[0]})
      }
    } else {
     setTimeout(()=>{
      Alert.alert("Document picked", JSON.stringify
        (result, null, 2))
     }, 100)
    } 
  };

  const submit = () => {
    if (!form,prompt || !form.title || !form.thumbnail || !form.video) {
      return Alert.alert("Please fill in all the fields")
    }
    setUploading(true)

    try {

      
      Alert.alert("Success", "Post uploaded succeessfully")
      router.push("/home")
    } catch (error){
      Alert.alert("Error", error.message)
    } finally {
      setForm({
        title: "",
        video: null,
        thumbnail: null,
        prompt: ""
      })
      setUploading(false);
      }
  };

  return (
    <SafeAreaView className="bg-neutral-700 h-full">
      <ScrollView className="px-4 my-6">
        {/* Header text */}
        <Text className="text-lg text-white font-semibold">
          Upload Video Dogs training 🐕
        </Text>

        {/* Video Title Input Field */}
        <FormField
          title="Video Title"
          value={form.title}
          placeholder="Give your video a catchy title..."
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />

        {/* Upload Video Section */}
        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-semibold">
            Upload Video
          </Text>

          <TouchableOpacity onPress={() => openPicker
            ("video")}>
            {form.video ? (
              <Video
                source={{ uri: form.video.uri }}
                className="w-full h-64 rounded-2xl"
                useNativeControls
                resizeMode={ResizeMode.COVER}
                isLooping
              />
            ) : (
              <View className="w-full h-40 px-4 bg-neutral-600 rounded-2xl justify-center items-center">
                <Image
                  source={icons.upload}
                  resizeMode="contain"
                  className="w-1/3 h-1/3"
                />
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Thumbnail Image Section */}
        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-semibold">
            Thumbnail Image
          </Text>

          <TouchableOpacity onPress={() => openPicker
            ("image")}>
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail.uri }}
                resizeMode="cover"
                className="w-full h-64 rounded-2xl"
              />
            ) : (
              <View
                className="w-full h-20 px-4 bg-neutral-600 rounded-2xl justify-center items-center border-2 border-gray-500 flex-row space-x-2"
              >
                <Image
                  source={icons.upload}
                  resizeMode="contain"
                  className="w-5 h-5"
                />
                <Text className="text-sm text-gray-100 font-medium">
                  Choose a File
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <FormField
          title="Dogs training Prompt"
          value={form.prompt}
          placeholder="prompt you used to create this video"
          handleChangeText={(e) => setForm({ ...form, prompt: e })}
          otherStyles="mt-7"
          isLoading={uploading}
        />

        {/* Submit Button */}
        <CustomButton
          title="Submit & Publish"
          handlePress={submit}
          containerStyles="mt-7"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
