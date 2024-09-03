import { View, Text, ScrollView, Image, Alert,} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

import { images } from "../../constants";

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { signIn } from "../../lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if(!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields")
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);

      // set it to global state...

      router.replace("/home");
    } catch (error) {
      if (error.message.includes("Creation of a session is prohibited")) {
        router.replace("/home");
      } else {
        Alert.alert("Error", error.message);
      }
    } finally {
      setIsSubmitting(false);
    }}
  
  return (
    <SafeAreaView className="bg-neutral-700 h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[140px] h-[35px]"
          />
          <Text className="text-2xl text-white font-semibold mt-7">
            Log in to TrainMyDog 
          </Text>

          <FormField
            title="Email" 
            value={form.email}
            handleChangeText={(e) =>
              setForm({ ...form, email: e })
            }
            otherStyles={"mt-7"}
            keyboardType="email-address"
            placeholder="Enter your email"

          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) =>
              setForm({ ...form, password: e })
            }
            secureTextEntry={true}
            placeholder="Enter your password"
          />

          <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles=" mt-7"
          isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row
          gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Dont`t have account?
            </Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-orange-100	">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

