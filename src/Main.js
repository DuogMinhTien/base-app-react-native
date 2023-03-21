import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { Button, Text } from "react-native";
import { StatusBar } from "react-native";
import SecondScreen from "./screens/SecondScreen";

const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="orange" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            alo: "hi",
          }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
