import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topSectionOfWelcomeScreen}>
        <Image
          style={styles.levetatingFruit}
          source={require("./assets/levetatingFruit.png")}
        />

        <Image
          style={styles.welcomeScreenBasket}
          source={require("./assets/welcomeScreenBasket.png")}
        />
        <View style={styles.basketShadow} />
      </View>
      <View>
        <View style={styles.welcomeScreenToptextView}>
          <Text style={styles.welcomeScreenToptext}>
            Get The Freshest Fruit Salad Combo
          </Text>
        </View>

        <View style={styles.welcomeScreentextView}>
          <Text style={styles.welcomeScreentext}>
            We deliver the best and freshest fruit salad in town. Order for a
            combo today!!!
          </Text>
        </View>
      </View>
      <View style={styles.theButtonView}>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6}
          style={styles.button}
        >
          <Text style={styles.firstButton}>Let's Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
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
    height: 260,
    width: 300,
    marginTop: 140,
  },
  basketShadow: {
    width: 290,
    height: 12,
    marginTop: 8,
    backgroundColor: "#F08626",
    borderRadius: 6,
  },
  welcomeScreenToptextView: {
    height: 29,
    width: 290,
    marginLeft: 25,
    marginTop: 40,
  },
  welcomeScreenToptext: {
    fontSize: 20,
    fontWeight: "500",
  },
  welcomeScreentextView: {
    height: 48,
    width: 282,
    marginLeft: 24,
    marginTop: 8,
  },
  welcomeScreentext: {
    fontSize: 16,
    fontWeight: "400",
    color: "#27214D",
  },
  theButtonView: {
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
  firstButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
});
