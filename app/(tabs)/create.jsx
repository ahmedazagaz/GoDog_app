import { SafeAreaView, View,Text, ScrollView } from "react-native";
import React from "react";

import FormField from "../../components/FormField";
const Create = () => {
    return (
        <SafeAreaView className="bg-neutral-700 h-full">
          <ScrollView className="px-4 my-6">
            <Text className="text-2xl text-white 
            font-psemibold">
            Upload Video Dogs training              
            </Text>

            <FormField
              title="Video Title"
            
            />
          </ScrollView>
        </SafeAreaView>
    );
}

export default Create;
