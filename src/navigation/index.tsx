import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "@/screens/Login";
import Home from "@/screens/Home";
import Students from "@/screens/Students";
import Attendance from "@/screens/Attendance";

import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Students" component={Students} />

      <Stack.Screen name="Attendance" component={Attendance} />
    </Stack.Navigator>
  );
}
