import { SafeAreaView, View,Text, ScrollView, TouchableOpacity ,Image} from "react-native";
import React, { useState } from "react"
import {ResizeMode, Video, resizeMode} from "expo-av"

import FormField from "../../components/FormField";
import { icons } from "../../constants";
const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState ({
      title: "",
      video: null,
      thumbnail:null,
      prompt:""
    })
    return (
        <SafeAreaView className="bg-neutral-700 h-full">
          <ScrollView className="px-4 my-6">
            <Text className="text-2xl text-white 
            font-psemibold">
            Upload Video Dogs training              
            </Text>

            <FormField
              title="Video Title"
              value={form.title}
              placeholder="Give your video catch title..."
              handleChangeText={(e) => setForm({...form,
              title: e})}
              otherStyles="mt-10"
            />

            <View className="mt-7 space-y-2">
              <Text className="text-base text-gray-100
              font-psemibold">
                Upload Video
              </Text>

              <TouchableOpacity>
                {form.video ?(
                  <Video
                  source={{uri: form.video.uri}}
                  className="w-full h-64 rounded-2xl"
                  useNativeControls
                  resizeMode={ResizeMode.COVER}
                  isLooping
                  />
                ):(
                  <View className="w-full h-40 px-4 bg-neutral-600 rounded-2xl justify-center items-center">
                      <Image source={icons.upload} resizeMode="contain" className="w-1/3 h-1/3">

                      </Image>

                  </View>
                )}
              </TouchableOpacity>
            </View>

            <View className="mt-7 space-y-2">
            <Text className="text-base text-gray-100
              font-psemibold">
                Thumbnail Image
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
    );
}

export default Create;
