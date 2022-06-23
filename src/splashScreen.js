import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Container from "./Container";

export default function SplashScreen({ navigation }) {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 303,
    alignItems: "center",
    justifyContent: "center",
  },
  splashIcon: {
    height: 205.5,
    width: 184,
  },
});
