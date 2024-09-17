import { SafeAreaView, View,Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react"
import {Video, resizeMode} from "expo-av"

import FormField from "../../components/FormField";
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

                  />
                ):(
                  <View className="w-full h-40 px-4 bg-neutral-600 rounded-2xl justify-center items-center">

                  </View>
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
    );
}

export default Create;
