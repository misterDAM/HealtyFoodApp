import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("authenticationScreen")}
      style={styles.container}
    >
      <Image
        style={styles.splashIcon}
        source={require("../assets/SplashScreenIcon.png")}
      />
      <StatusBar style="auto" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  splashIcon: {
    height: 205.5,
    width: 184,
  },
});
