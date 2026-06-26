import { View, Button, Alert, TextInput, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";

import { Music2 } from "lucide-react-native";

import { signIn, signUp } from "@/services/auth";

export default function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleCreateAccount() {
    try {
      await signUp(email, password);

      Alert.alert("Sucesso", "Conta criada");
    } catch (error: any) {
      console.log("ERRO SIGNUP:", error);

      Alert.alert("Erro", error.message);
    }
  }

  async function handleLogin() {
    try {
      await signIn(email, password);
    } catch (error) {
      console.log(error);

      Alert.alert("Erro", "Email ou senha inválidos");
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="items-center pt-20">
        <View className="h-28 w-28 rounded-full bg-primary items-center justify-center">
          <Music2 color="white" size={48} />
        </View>

        <Text className="mt-6 text-5xl font-bold text-primary">AulaSom</Text>

        <Text className="mt-2 text-base text-gray-500">
          Sua escola de música na palma da mão
        </Text>
      </View>

      <View className="mt-10 mx-6 rounded-3xl bg-white p-6 shadow-sm">
        <Text className="text-3xl font-bold text-slate-900">
          Bem-vindo de volta 👋
        </Text>

        <Text className="mt-2 text-gray-500">Entre para continuar</Text>

        <TextInput
          className="mt-6 rounded-xl border border-border p-4 text-slate-900"
          placeholder="Email"
          placeholderTextColor="#6B7280"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          className="mt-4 rounded-xl border border-border p-4 text-slate-900"
          placeholder="Senha"
          placeholderTextColor="#6B7280"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View className="mt-6">
          <Button title="Entrar" onPress={handleLogin} />
        </View>

        <View className="mt-4">
          <Button title="Criar conta" onPress={handleCreateAccount} />
        </View>
      </View>
    </SafeAreaView>
  );
}
