import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native"; 
import { Redirect, router} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const {isLoading, isLoggedIn} = useGlobalContext(); 

  if(!isLoading && isLoggedIn) return <Redirect href="/home" />


  return (
    <SafeAreaView className="bg-neutral-700">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[90vh] px-4">
          <Image
            source={images.logo}
            className="w-[190px] h-[70px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[385px] w-full h-[250px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-2xl text-white font-bold text-center">
              Welcome to{" "}
              <Text className="text-orange-100">
              TrainMyDog 
              </Text>
            </Text>
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Share, Learn, and Elevate Your Dog Training Skills

          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
