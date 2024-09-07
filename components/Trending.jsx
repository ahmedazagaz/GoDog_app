import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Image, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { icons } from '../constants';

import {Video, ResizeMode} from "expo-av"

const zoomIn = {
    0: {
      scale: 0.9
    },
    1: {
      scale: 1.1,
    }
}

const zoomOut = {
    0: {
      scale: 1
    },
    1: {
      scale: 0.9,
    }
}

const TrendingItem = ({ activeItem, item }) => {
    const [play, setPlay] = useState(false);

    return (
        <Animatable.View
          style={{ marginRight: 20 }}
          animation={activeItem === item.$id ? zoomIn : zoomOut}
          duration={500}
        >
          {play ? (
            <Video
              source={{uri: item.video }}
              className="w-52 h-72 rounded-[35px] mt-3
              bg-white/10"
              resizeMode={ResizeMode.CONTAIN}
              udeNativeControls
              shouldPlay
              onPlaybackStatusUpdate={(status) => {
                if(status.didJustFinish) {
                  setPlay(false);
                }
              }}
            />
          ) : (
            <TouchableOpacity
              style={{ justifyContent: 'center', alignItems: 'center', position: 'relative' }}
              activeOpacity={0.7}
              onPress={() => setPlay(true)}
            >
              <ImageBackground 
                  source={{ uri: item.thumbnail }}
                  style={{ width: 160, height: 128, borderRadius: 35, marginVertical: 20, overflow: 'hidden', shadowColor: '#000', shadowOpacity: 0.4, shadowRadius: 10 }}
                  resizeMode='cover'
              />
              <Image
                source={icons.play}
                style={{ width: 48, height: 48, position: 'absolute' }}
                resizeMode='contain'
              />
            </TouchableOpacity>
          )}
        </Animatable.View>
    )
}

const Trending = ({ posts }) => {
    const [activeItem, setactiveItem] = useState(posts.length > 0 ? posts[0].$id : null);

    const viewableItemsChanged = ({ viewableItems }) => {
        if(viewableItems.length > 0) { // Correction ici (O -> 0)
            setactiveItem(viewableItems[0].key);
        }
    }

    return (
        <FlatList 
            data={posts}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
              <TrendingItem activeItem={activeItem} item={item} />
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={{ 
                itemVisiblePercentThreshold: 70 
            }}
            contentOffset={{x: 170}}
            horizontal
        />
    )
}

export default Trending;