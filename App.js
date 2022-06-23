import { View, Text } from "react-native";
import React from "react";
import AuthenticationScreen from "./src/AuthenticationScreen";
import SplashScreen from "./src/splashScreen";
import WelcomeScreen from "./src/welcomeScreen";
import HomeScreenOne from "./src/homeScreenOne";
import AddToBasketScreen from "./src/AddToBasketScreen";
import MyBasket from "./src/MyBasket";
import OrderCongratulationScreen from "./src/OrderCongratulationScreen";
import TrackOrderDeliveryStatusScreen from "./src/TrackOrderDeliveryStatusScreen";
import CompletDetailsModal from "./src/CompletDetailsModal";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={{ display: "flex", flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen
            name="AddToBasketScreen"
            component={AddToBasketScreen}
          />

          <Stack.Screen name="splashScreen" component={SplashScreen} />
          <Stack.Screen name="myBucketView" component={MyBasket} />
          {/* <Stack.Screen
            name="CompletDetailsModal"
            component={CompletDetailsModal}
          /> */}
          <Stack.Screen
            name="authenticationScreen"
            component={AuthenticationScreen}
          />
          <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="homeScreenOne" component={HomeScreenOne} />
          <Stack.Screen
            name="TrackOrderDeliveryStatusScreen"
            component={TrackOrderDeliveryStatusScreen}
          />
          <Stack.Screen
            name="OrderCongratulationScreen"
            component={OrderCongratulationScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
