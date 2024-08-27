import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { images } from "../../constants";

const Create = () => {
  return (
    <ScrollView className="flex-1 bg-neutral-700 p-7">
      {/* Reminders Section */}
      <View className="bg-neutral-600 rounded-lg p-7 mb-7">
        <Text className="text-center text-gray-500">No reminders yet</Text>
        <TouchableOpacity className="mt-4 bg-yellow-600 rounded-lg p-3">
          <Text className="text-center text-white">+ Reminder</Text>
        </TouchableOpacity>
      </View>

      {/* Popular Articles Section */}
      <View className="bg-neutral-600 rounded-lg p-2 mb-4">
        <Text className="text-zinc-200 text-lg font-psemibold mb-4">Popular articles</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex-row space-x-2">
          <View className="w-24 p-2">
          <Image
                source={images.health1}
                className="w-full h-20 rounded-lg mb-2 border-2"
                style={{ borderColor: '#D0BEA0' }}
              />
              <Text className="text-gray-300 font-psemibold text-center text-xs">
                When should a puppy be vaccinated?
              </Text>
            </View>
            <View className="w-24 p-2">
            <Image
                source={images.health2}
                className="w-full h-20 rounded-lg mb-2 border-2"
                style={{ borderColor: '#D0BEA0' }}
              />
              <Text className="text-gray-300 font-psemibold text-center text-xs">
                What is vaccination?
              </Text>
            </View>
            <View className="w-24 p-2">
            <Image
                source={images.health3}
                className="w-full h-20 rounded-lg mb-2 border-2"
                style={{ borderColor: '#D0BEA0' }}
              />
              <Text className="text-gray-300 font-psemibold text-center text-xs">
                How do dogs get worms?
              </Text>
            </View>
            <View className="w-24 p-2">
              <Image
                source={images.health4}  // Ajouter une image pour cet article
                className="w-full h-20 rounded-lg mb-2 border-2"
                style={{ borderColor: '#D0BEA0' }}
              />
              <Text className="text-gray-300 font-psemibold text-center text-xs">
                What diseases do we vaccinate dogs against?
              </Text>
            </View>
            <View className="w-24 p-2">
              <Image
                source={images.health5}
                className="w-full h-20 rounded-lg mb-2 border-2"
                style={{ borderColor: '#D0BEA0' }}
              />
              <Text className="text-gray-300 font-psemibold text-center text-xs">
                Do we need to vaccinate a dog that does not...
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Categories Section */}
      <View className="bg-neutral-600 rounded-lg p-4">
        <Text className="text-zinc-200 text-lg font-psemibold mb-4">Categories</Text>
        <View className="mb-4">
          <TouchableOpacity className="flex-row items-center p-3 bg-neutral-700 rounded-lg mb-2">
            <Image
              source={images.vc1}
              className="w-10 h-10 mr-3 border-2"
              style={{ borderColor: '#D0BEA0' }}
            />
            <Text className="text-white">Vaccination</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center p-3 bg-neutral-700 rounded-lg mb-2">
            <Image
              source={images.vc2}
              className="w-10 h-10 mr-3 border-2"
              style={{ borderColor: '#D0BEA0' }}
            />
            <Text className="text-white">Ticks and fleas protection</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center p-3 bg-neutral-700 rounded-lg">
            <Image
              source={images.vc3}
              className="w-10 h-10 mr-3 border-2"
              style={{ borderColor: '#D0BEA0' }}
            />
            <Text className="text-white">Helminths protection</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Create;
