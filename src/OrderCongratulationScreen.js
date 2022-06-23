import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Container from "./Container";
// import {  } from "react-native-gesture-handler";

export default function OrderCongratulationScreen({ navigation }) {
  return (
    <Container>
      <View style={styles.parenttop}>
        <ImageBackground
          source={require("../assets/markBackground1.png")}
          style={styles.p3}
        >
          <Image
            source={require("../assets/markBackground2.png")}
            style={styles.darkGreen}
          />
          <Image
            source={require("../assets/mark03.png")}
            style={styles.checkMark}
          />
        </ImageBackground>
      </View>
      <View style={styles.textArea}>
        <Text style={styles.congTEXT}>Congratulations!!!</Text>
        <View style={styles.orderTExtView}>
          <Text style={styles.orderTExt}>
            Your order has been taken and is being attended to
          </Text>
        </View>
      </View>
      <View style={styles.parentButtonsView}>
        <View style={styles.trackorderButtonView}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TrackOrderDeliveryStatusScreen")
            }
            style={styles.trackOrderButton}
          >
            <Text style={styles.trackOrderText}>Track order</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("homeScreenOne")}
          style={styles.continueShoppingBUtton}
        >
          <Text style={styles.continueShoppingText}>Continue shoping</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
const styles = StyleSheet.create({
  parenttop: {
    marginTop: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  p3: {
    height: 164,
    width: 164,
    justifyContent: "center",
    alignItems: "center",
  },
  darkGreen: {
    height: 100,
    width: 100,
  },
  checkMark: {
    position: "absolute",
    height: 31,
    width: 37,
  },
  textArea: {
    alignItems: "center",
    marginTop: 56,
    marginBottom: 56,
  },
  congTEXT: {
    fontSize: 32,
    fontWeight: "500",
    marginBottom: 16,
  },
  orderTExtView: {
    flexWrap: "wrap",
    width: 240,
    height: 60,
    alignItems: "center",
  },
  orderTExt: {
    fontSize: 20,
    fontWeight: "400",
  },
  parentButtonsView: {
    alignItems: "center",
  },
  trackorderButtonView: {
    marginBottom: 45,
  },
  trackOrderButton: {
    height: 56,
    width: 133,
    backgroundColor: "#FFA451",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  trackOrderText: {
    fontSize: 16,
    fontWeight: "500",
  },
  continueShoppingBUtton: {
    borderWidth: 2,
    borderColor: "#FFA451",
    height: 56,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  continueShoppingText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFA451",
  },
});
