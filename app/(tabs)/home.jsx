import { Text, FlatList, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";

const articles = [
    {
        id: 1,
        title: "Training Markers: 3 Ways To Help Your Dog Understand You",
        image: images.trainingMarkers,
    },
    {
        id: 2,
        title: "Top 3 ways to motivate Your Dog",
        image: images.motivateDog,
    },
    {
        id: 3,
        title: "Successful Training: 4 Steps You Shouldn't Skip",
        image: images.successfulTraining,
    },
    {
        id: 4,
        title: "TOP 13 Mistakes to avoid When Training Dogs",
        image: images.trainingMistakes,
    },
];

const Home = () => {
    return (
        <SafeAreaView className="bg-neutral-700">
            <FlatList 
                data={articles}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View className="my-3 px-3">
                        {/* Ligne de séparation */}
                        <View className="h-0.5 bg-[#484848] mb-2" />

                        <View className="flex-row items-center">
                            <Image
                                source={item.image}
                                className="w-12 h-12 rounded border-2"
                                style={{ borderColor: '#D0BEA0' }} 
                                resizeMode="contain"
                            />
                            <Text className="text-white text-base font-psemibold ml-3 flex-shrink">
                                {item.title}
                            </Text>
                        </View>
                    </View>
                )}
                ListHeaderComponent={() => (
                    <View className="my-6 px-4 space-y-6">
                        <View className="justify-between items-start flex-row mb-5">
                            <View>
                                <Text className="font-pmedium text-sm text-gray-100">
                                    Welcome👋
                                </Text>
                                <Text className="text-2xl font-psemibold text-white">
                                    Ahmed
                                </Text>
                            </View>

                            <View className="mt-1.5">
                                <Image
                                    source={images.logoSmall}
                                    className="w-10 h-12"
                                    resizeMode="contain"
                                />
                            </View>
                        </View>

                        <Text className="text-zinc-200 text-lg font-psemibold">
                            Essential
                        </Text>
                    </View>
                )}
            />  
        </SafeAreaView>
    );
};

export default Home;
