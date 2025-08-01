import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useRouter } from "expo-router";
const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current && inputRef.current.focus) {
        inputRef.current.focus();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar hidden />

      <View className="flex-1 px-6">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 justify-center">
            <View className="mb-8">
              <Text className="text-4xl font-bold text-black mb-2">
                Forgot password?
              </Text>
              <Text className="text-base text-gray-500">
                Enter your email address and we'll send you confirmation code to
                reset your password
              </Text>
            </View>

            <View>
              <Input
                label="Email Address"
                value={email}
                onChangeText={setEmail}
                ref={inputRef}
                autoFocus={true}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>
        </ScrollView>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <View className="pb-6 pt-4">
            <Button
              title="Continue"
              size="md"
              textClassName="text-white "
              className="bg-[#FE8C00] rounded-full"
              onPress={() => {
                router.push("/auth/otp");
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
