import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Container from "./Container";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function AuthenticationScreen({ navigation }) {
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.topSectionOfWelcomeScreen}>
          <Image
            style={styles.levetatingFruit}
            source={require("../assets/levetatingFruit.png")}
          />

          <Image
            style={styles.welcomeScreenBasket}
            source={require("../assets/AuthenticationBasket.png")}
          />
          <View style={styles.basketShadow} />
        </View>
        <View>
          <View style={styles.nameRequestView}>
            <Text style={styles.nameRequestText}>What is your firstname?</Text>
          </View>

          <View style={styles.nameInputView}>
            <TextInput placeholder="Name" style={styles.nameInput} />
          </View>
        </View>
        <View style={styles.StartOrderingButtonView}>
          <TouchableOpacity
            onPress={() => navigation.navigate("welcomeScreen")}
            activeOpacity={0.6}
            style={styles.button}
          >
            <Text style={styles.StartOrderingButton}>Sttart Ordering</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  topSectionOfWelcomeScreen: {
    height: 460,
    width: 375,
    backgroundColor: "#FFA451",
    alignItems: "center",
  },
  levetatingFruit: {
    width: 50,
    height: 37.5,
    top: 139,
    right: 50,
    position: "absolute",
  },
  welcomeScreenBasket: {
    height: 281.21,
    width: 301,
    marginTop: 140,
  },
  basketShadow: {
    width: 290,
    height: 12,
    marginTop: 8,
    backgroundColor: "#F08626",
    borderRadius: 6,
  },
  nameRequestView: {
    height: 29,
    width: 183,
    marginLeft: 25,
    marginTop: 40,
  },
  nameRequestText: {
    fontSize: 20,
    fontWeight: "500",
  },
  nameInputView: {
    borderRadius: 20,
    alignItems: "center",
    marginTop: 8,
    backgroundColor: "#F3F1F1",
  },
  nameInput: {
    height: 56,
    width: 310,

    marginLeft: 20,
  },
  StartOrderingButtonView: {
    marginTop: 40,

    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFA451",
    borderRadius: 20,
    height: 56,
    width: 327,
    alignItems: "center",
    justifyContent: "center",
  },
  StartOrderingButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
});
