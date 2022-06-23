import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import Container from "./Container";
// import {} from "react-native-gesture-handler";
// import { panGestureHandlerCustomNativeProps } from "react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler";

//   const Entries = [
//     {
//       foodImg: require("../assets/GlowingBerryFruitSalad.png"),
//       foodName: "omo the Food is rice",
//       packNumber: "2 Packs",
//       Ammount: "N 20, 000",
//     },
//     {
//       foodImg: require("../assets/GlowingBerryFruitSalad.png"),
//       foodName: "omo the Food is rice",
//       packNumber: "2 Packs",
//       Ammount: "N 20, 000",
//     },
//     {
//       foodImg: require("../assets/GlowingBerryFruitSalad.png"),
//       foodName: "omo the Food is rice",
//       packNumber: "2 Packs",
//       Ammount: "N 20, 000",
//     },
//     {
//       foodImg: require("../assets/GlowingBerryFruitSalad.png"),
//       foodName: "omo the Food is rice",
//       packNumber: "2 Packs",
//       Ammount: "N 20, 000",
//     },
//     {
//       foodImg: require("../assets/GlowingBerryFruitSalad.png"),
//       foodName: "omo the Food is rice",
//       packNumber: "2 Packs",
//       Ammount: "N 20, 000",
//     },
//     {
//       foodImg: require("../assets/GlowingBerryFruitSalad.png"),
//       foodName: "omo the Food is rice",
//       packNumber: "2 Packs",
//       Ammount: "N 20, 000",
//     },
//     {
//       foodImg: require("../assets/GlowingBerryFruitSalad.png"),
//       foodName: "omo the Food is rice",
//       packNumber: "2 Packs",
//       Ammount: "N 20, 000",
//     },
//   ];

export default function TrackOrderDeliveryStatusScreen({ navigation }) {
  return (
    <Container>
      <View>
        <View style={styles.topSectionParentViewColour}>
          <TouchableOpacity
            onPress={() => navigation.navigate("homeScreenOne")}
            style={styles.bcakbuttonParent}
          >
            <Image
              style={styles.backButtonArroImg}
              source={require("../assets/goBackButton.png")}
            />
            <Text>GO Back</Text>
          </TouchableOpacity>
          <View style={styles.MyBucketTextView}>
            <Text style={styles.MybucketText}>My Bucket</Text>
          </View>
        </View>
      </View>

      <ScrollView style={{ marginTop: 40 }}>
        <View style={styles.mother1Screen}>
          <View style={styles.sideGifFlyer}>
            <Image
              style={styles.penAndPaper}
              source={require("../assets/orderTaken.png")}
            />
          </View>
          <View style={styles.OrderTaken}>
            <Text style={styles.OrderTakenTXT}>Order Taken</Text>
          </View>
          <View>
            <ImageBackground
              source={require("../assets/markBackground2.png")}
              style={styles.greenBackOfTick}
            >
              <Image
                source={require("../assets/mark03.png")}
                style={styles.nikeOngreen}
              />
            </ImageBackground>
          </View>
        </View>
      </ScrollView>

      <ScrollView style={{ marginTop: 40 }}>
        <View style={styles.mother1Screen}>
          <View style={styles.sideGifFlyer}>
            <Image
              style={styles.penAndPaper}
              source={require("../assets/orderinProcessing.png")}
            />
          </View>
          <View style={styles.OrderTaken}>
            <Text style={styles.OrderTakenTXT}>Order Taken</Text>
          </View>
          <View>
            <ImageBackground
              source={require("../assets/markBackground2.png")}
              style={styles.greenBackOfTick}
            >
              <Image
                source={require("../assets/mark03.png")}
                style={styles.nikeOngreen}
              />
            </ImageBackground>
          </View>
        </View>
      </ScrollView>

      <ScrollView style={{ marginTop: 40 }}>
        <View style={styles.mother1Screen}>
          <View style={styles.sideGifFlyer}>
            <Image
              style={styles.penAndPaper}
              source={require("../assets/orderBeingDelivered.png")}
            />
          </View>
          <View style={styles.oBD}>
            <Text style={styles.OrderTakenTXT}>Order is Being Delivered</Text>
            <Text style={styles.smallTXT}> your delivery agient is coming</Text>
          </View>
          <TouchableOpacity>
            <ImageBackground
              source={require("../assets/phoneTransparentTable.png")}
              style={styles.orangeCircleBackGnd}
            >
              <Image
                source={require("../assets/phoneTransparent.png")}
                style={styles.callOnOrange}
              />
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View>
        <Image style={styles.theMap} source={require("../assets/map.png")} />
      </View>

      <ScrollView style={{ marginTop: 40 }}>
        <View style={styles.mother1Screen}>
          <View style={styles.sideGifFlyer}>
            <ImageBackground
              source={require("../assets/markBackground2.png")}
              style={styles.orderRecived}
            >
              <Image
                source={require("../assets/mark03.png")}
                style={styles.orderRecivedMark}
              />
            </ImageBackground>
          </View>
          <View style={styles.OrderTaken}>
            <Text style={styles.OrderTakenTXT}>Order Received</Text>
          </View>
          <View>
            <Image
              source={require("../assets/mark03.png")}
              style={styles.nikeOngreen}
            />
          </View>
        </View>
      </ScrollView>

      {/* <View style={styles.lowerLevel}>
        <View style={styles.totalAndFigure}>
          <Text style={styles.totalSpelling}>Total</Text>
          <Text style={styles.total}>N 60,000</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("OrderCongratulationScreen")}
          style={styles.checkoutButton}
        >
          <Text>Checkout</Text>
        </TouchableOpacity> */}
      {/* </View> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  topSectionParentViewColour: {
    backgroundColor: "#FFA451",
    flexDirection: "row",
    height: 83,
    alignItems: "center",
  },
  topSectionParentView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 42,
  },
  bcakbuttonParent: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 24,
    height: 32,
    width: 80,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    borderRadius: 15,
  },
  backButtonArroImg: {
    height: 20,
    width: 10,
    marginRight: 4,
  },
  MyBucketTextView: {
    marginLeft: 40,
  },
  MybucketText: {
    fontWeight: "500",
    fontSize: 24,
    color: "#fff",
  },
  mother1Screen: {
    height: 64,
    // backgroundColor: "#E5E5E5",
    marginLeft: 33,
    flexDirection: "row",
    alignItems: "center",
  },
  sideGifFlyer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1EFF6",
    height: 64,
    width: 65,
    borderRadius: 15,
  },
  orderRecived: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  orderRecivedMark: {
    height: 12.5,
    width: 14.81,
  },
  penAndPaper: {
    height: 43,
    width: 48,
  },
  OrderTaken: {
    marginLeft: 24,
    marginRight: 115,
  },
  OrderTakenTXT: {
    fontWeight: "500",
    fontSize: 16,
  },
  smallTXT: {
    fontWeight: "400",
    fontSize: 14,
  },
  greenBackOfTick: {
    height: 24,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  nikeOngreen: {
    height: 7.55,
    width: 8.89,
  },
  oBD: {
    marginRight: 30,
    marginLeft: 20,
    alignItems: "center",
  },
  orangeCircleBackGnd: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  callOnOrange: {
    height: 20,
    width: 20,
  },
  theMap: {
    height: 128,
    width: 327,
    marginLeft: 20,
    marginTop: 30,
    // marginHorizontal: "center",
  },
});

//   parentWholeItem: {
//     marginBottom: 20,
//     marginTop: 40,
//   },
//   touch: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   foodIMGparent: {
//     height: 64,
//     width: 65,
//     marginLeft: 24,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 16,
//   },
//   foodImg: {
//     height: 40,
//     width: 40,
//   },
//   nameOfFoodAndnumber: {
//     flexWrap: "wrap",
//     marginRight: 60,
//     // flex: 1,
//   },
//   ammount: {
//     fontWeight: "500",
//     fontSize: 16,
//   },
//   foodName: {
//     fontWeight: "500",
//     fontSize: 16,
//   },
//   lowerLevel: {
//     flexDirection: "row",
//     marginBottom: 56,
//     position: "absolute",
//     bottom: 56,
//     backgroundColor: "#ffff",
//     width: 370,
//   },
//   totalAndFigure: {
//     marginRight: 24,
//     marginLeft: 25,
//   },
//   totalSpelling: {
//     fontWeight: "500",
//     fontSize: 16,
//   },
//   total: {
//     fontWeight: "500",
//     fontSize: 24,
//   },
//   checkoutButton: {
//     height: 56,
//     width: 199,
//     backgroundColor: "#FFA451",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 15,
//   },
// });
