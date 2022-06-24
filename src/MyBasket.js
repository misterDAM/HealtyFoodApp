// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
//   ImageBackground,
//   Animated,
//   Dimensions,
// } from "react-native";
// import React, { useState } from "react";
// import Container from "./Container";
// // import {} from "react-native-gesture-handler";
// // import { panGestureHandlerCustomNativeProps } from "react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler";

// const Entries = [
//   {
//     foodImg: require("../assets/GlowingBerryFruitSalad.png"),
//     foodName: "omo the Food is rice",
//     packNumber: "2 Packs",
//     Ammount: "N 20, 000",
//   },
//   {
//     foodImg: require("../assets/GlowingBerryFruitSalad.png"),
//     foodName: "omo the Food is rice",
//     packNumber: "2 Packs",
//     Ammount: "N 20, 000",
//   },
//   {
//     foodImg: require("../assets/GlowingBerryFruitSalad.png"),
//     foodName: "omo the Food is rice",
//     packNumber: "2 Packs",
//     Ammount: "N 20, 000",
//   },
//   {
//     foodImg: require("../assets/GlowingBerryFruitSalad.png"),
//     foodName: "omo the Food is rice",
//     packNumber: "2 Packs",
//     Ammount: "N 20, 000",
//   },
//   {
//     foodImg: require("../assets/GlowingBerryFruitSalad.png"),
//     foodName: "omo the Food is rice",
//     packNumber: "2 Packs",
//     Ammount: "N 20, 000",
//   },
//   {
//     foodImg: require("../assets/GlowingBerryFruitSalad.png"),
//     foodName: "omo the Food is rice",
//     packNumber: "2 Packs",
//     Ammount: "N 20, 000",
//   },
//   {
//     foodImg: require("../assets/GlowingBerryFruitSalad.png"),
//     foodName: "omo the Food is rice",
//     packNumber: "2 Packs",
//     Ammount: "N 20, 000",
//   },
// ];

// export default function MyBasket({ navigation }) {
//   const [animation, setAnimation] = useState(new Animated.Value(0));
//   const { height } = Dimensions.get("window");

//   const color = animation.interpolate({
//     inputRange: [0, 0.2, 1.8, 2],
//     outputRange: [
//       "rgba(255, 255, 255, 0.0)",
//       "rgba(45, 57, 82, 0.5)",
//       "rgba(45, 57, 82, 0.8)",
//       "rgba(255, 255, 255, 0.0)",
//     ],
//   });

//   const openMyBasket = animation.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 1],
//     extrapolate: "clamp",
//   });

//   const saveMyBasket = animation.interpolate({
//     inputRange: [1, 2],
//     outputRange: [0, -height],
//     extrapolate: "clamp",
//   });

//   const MybasketTrigger = () => {
//     Animated.timing(animation, {
//       toValue: 1,
//       duration: 500,
//       useNativeDriver: false,
//     }).start();
//   };

//   const close = () => {
//     Animated.timing(animation, {
//       toValue: 0,
//       duration: 500,
//       useNativeDriver: false,
//     }).start();
//   };

//   const save = () => {
//     Animated.timing(animation, {
//       toValue: 2,
//       duration: 500,
//       useNativeDriver: false,
//     }).start(() => {
//       animation.setValue(0);
//     });
//   };

//   const open = {
//     transform: [{ scale: openMyBasket }, { translateY: saveMyBasket }],
//   };

//   const background = {
//     backgroundColor: color,
//   };

//   return (
//     <>
//       <Container>
//         <View>
//           <View style={styles.topSectionParentViewColour}>
//             <TouchableOpacity
//               onPress={() => navigation.navigate("homeScreenOne")}
//               style={styles.bcakbuttonParent}
//             >
//               <Image
//                 style={styles.backButtonArroImg}
//                 source={require("../assets/goBackButton.png")}
//               />
//               <Text>GO Back</Text>
//             </TouchableOpacity>
//             <View style={styles.MyBucketTextView}>
//               <Text style={styles.MybucketText}>My Bucket</Text>
//             </View>
//           </View>
//         </View>

//         <ScrollView>
//           {Entries.map(({ foodImg, foodName, packNumber, Ammount }, index) => {
//             return (
//               <View key={index.toString()} style={styles.parentWholeItem}>
//                 <TouchableOpacity style={styles.touch}>
//                   <View style={styles.foodIMGparent}>
//                     <Image source={foodImg} style={styles.foodImg} />
//                   </View>
//                   <View style={styles.nameOfFoodAndnumber}>
//                     <Text style={styles.foodName}>{foodName}</Text>
//                     <Text>{packNumber}</Text>
//                   </View>
//                   <View>
//                     <Text style={styles.ammount}>{Ammount}</Text>
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             );
//           })}
//         </ScrollView>
//         <View style={styles.bottomBase} />
//       </Container>

//       <View style={styles.lowerLevel}>
//         <View style={styles.totalAndFigure}>
//           <Text style={styles.totalSpelling}>Total</Text>
//           <Text style={styles.total}>N 60,000</Text>
//         </View>
//         <TouchableOpacity
//           onPress={MybasketTrigger}
//           style={styles.checkoutButton}
//         >
//           <Text>Checkout</Text>
//         </TouchableOpacity>
//       </View>

//       <Animated.View style={""}>
//         <View style={styles.sliderBodyParent}>
//           <View style={{ marginLeft: 160 }}>
//             <TouchableOpacity onPress={close}>
//               <ImageBackground
//                 style={styles.XimgBackground}
//                 source={require("../assets/cancleback.png")}
//               >
//                 <Image
//                   style={styles.Ximg}
//                   source={require("../assets/canclefrontX.png")}
//                 />
//               </ImageBackground>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.sliderBody}>
//             <View style={styles.DeliveryAdd}>
//               <Text style={styles.DeliveryAddTxT}>Delivery address</Text>

//               <View style={styles.parentAddAndPhoneNumStyling}>
//                 <TextInput
//                   style={styles.addAndPhoneNumStyleing}
//                   placeholder="10th avenue, Lekki, Lagos state"
//                   // onChangeText={(text) => setPasswordText(text)}
//                   // value={address}
//                 />
//               </View>
//             </View>

//             <View style={styles.DeliveryAdd}>
//               <Text style={styles.DeliveryAddTxT}>Numerb we can call</Text>
//               <View style={styles.parentAddAndPhoneNumStyling}>
//                 <TextInput
//                   style={styles.addAndPhoneNumStyleing}
//                   placeholder="090 888 8888"
//                   // onChangeText={(text) => setPasswordText(text)}
//                   // value={PhoneNumber}
//                 />
//               </View>
//               <View style={styles.PWCParent}>
//                 <TouchableOpacity style={styles.PWC}>
//                   <Text>Pay with cards</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </View>
//       </Animated.View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   topSectionParentViewColour: {
//     backgroundColor: "#FFA451",
//     flexDirection: "row",
//     height: 83,
//     alignItems: "center",
//   },
//   topSectionParentView: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 42,
//   },
//   bcakbuttonParent: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginLeft: 24,
//     height: 32,
//     width: 80,
//     backgroundColor: "#FFFFFF",
//     justifyContent: "center",
//     borderRadius: 15,
//   },
//   backButtonArroImg: {
//     height: 20,
//     width: 10,
//     marginRight: 4,
//   },
//   MyBucketTextView: {
//     marginLeft: 40,
//   },
//   MybucketText: {
//     fontWeight: "500",
//     fontSize: 24,
//     color: "#fff",
//   },
//   parentWholeItem: {
//     marginBottom: 10,
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
//   bottomBase: {
//     height: 59,
//   },
//   lowerLevel: {
//     flexDirection: "row",
//     marginBottom: 5,
//     position: "absolute",
//     bottom: 10,
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

//   sliderBodyParent: {
//     // marginTop: 200,
//     // position: "absolute",
//   },
//   XimgBackground: {
//     justifyContent: "center",
//     alignItems: "center",
//     height: 48,
//     width: 48,
//   },
//   Ximg: { height: 16.8, width: 16.8 },
//   sliderBody: {
//     height: 350,
//     width: 360,

//     marginTop: 16,
//     backgroundColor: "#FFFFFF",
//     borderTopRightRadius: 25,
//     borderTopLeftRadius: 25,
//   },
//   DeliveryAdd: {
//     marginLeft: 24,
//   },
//   DeliveryAddTxT: {
//     fontSize: 20,
//     fontWeight: "500",
//   },
//   parentAddAndPhoneNumStyling: {
//     height: 56,
//     width: 327,
//     backgroundColor: "#F3F1F1",
//     marginTop: 16,
//     marginBottom: 24,
//     borderRadius: 10,
//   },
//   addAndPhoneNumStyleing: {
//     marginLeft: 10,
//     height: 56,
//     width: 327,
//     backgroundColor: "#F3F1F1",
//     borderRadius: 2,
//   },
//   PWCParent: {
//     marginLeft: 200,
//   },
//   PWC: {
//     height: 56,
//     width: 120,
//     backgroundColor: "aqua",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 20,
//   },
// });
