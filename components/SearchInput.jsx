import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import { icons } from '../constants';

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
      <View className="border-2 border-gray-600 w-full h-16 px-4 bg-neutral-700 rounded-2xl focus:border-orange-100 flex-row items-center space-x-4">
        <TextInput
          className="text-base mt-0.5 text-white flex-1
          font-pregular"
          value={value}
          placeholder="Search for a video topic"
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

      <TouchableOpacity>
        <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode='contain'
        />
      </TouchableOpacity>
      </View>
  );
};

export default SearchInput ;
