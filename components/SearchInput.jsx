import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { icons } from '../constants';
import { router, usePathname } from 'expo-router';

const SearchInput = () => {
  const pathname = usePathname();
  const [query, setQuery] = useState('');

  return (
    <View className="border-2 border-gray-600 w-full h-16 px-4 bg-neutral-700 rounded-2xl focus:border-orange-100 flex-row items-center space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert("Missing query", "Please input something to search results across database");
          }

          if (pathname.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`); 
          }
        }}
      >
        <Image
          source={icons.search}
          className="w-5 h-5"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
