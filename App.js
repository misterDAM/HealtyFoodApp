import { View, Text } from "react-native";
import React from "react";
import AuthenticationScreen from "./src/AuthenticationScreen";
import SplashScreen from "./src/splashScreen";
import WelcomeScreen from "./src/welcomeScreen";
import HomeScreenOne from "./src/homeScreenOne";
import AddToBasketScreen from "./src/AddToBasketScreen";
// import { useScreens } from "react-native-screens";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={{ display: "flex", flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splashScreen" component={SplashScreen} />
          <Stack.Screen
            name="authenticationScreen"
            component={AuthenticationScreen}
          />
          <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="homeScreenOne" component={HomeScreenOne} />
          <Stack.Screen
            name="AddToBasketScreen"
            component={AddToBasketScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
