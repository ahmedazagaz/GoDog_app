import { View, Text, Image } from "react-native"; 
import React from "react";
import { Tabs } from "expo-router"; 

import { icons } from "../../constants"; 

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2" >
            <Image
                source={icon} 
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? "font-psemibold": 
            "font-pregular"} text-xs`} style={{color:color}}>
                {name}

            </Text>
        </View>
    );
};

const TabsLayout = () => {
    return (
        <>
            <Tabs 
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#D0BEA0",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarStyle: {
                        backgroundColor: "#27272a",
                        borderTopWidth:1,
                        borderTopColor: "#232539",
                        height:84,
                    }
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                focused={focused}
                                name="Lessons"
                            />
                        ),
                    }}
                />
                    <Tabs.Screen
                    name="health"
                    options={{
                        title: "Health",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.plus}
                                color={color}
                                focused={focused}
                                name="Health"
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="bookmark"
                    options={{
                        title: "Bookmark",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.bookmark}
                                color={color}
                                focused={focused}
                                name="My dog"
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                focused={focused}
                                name="Profile"
                            />
                        ),
                    }}
                />
                
            </Tabs>
        </>
    );
};

export default TabsLayout;
