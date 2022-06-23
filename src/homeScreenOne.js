import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Container from "./Container";

const FoodDisplaySection = [
  {
    foodIMG: require("../assets/HoneyLimePeachFruitSalad.png"),
    priceOFmeal: "N 2,000",
    nameOfmeal: "Honey Lime Combo",
    heart: require("../assets/heartLike.png"),
    addToCart: require("../assets/AddPlus.png"),
    redHeart: require("../assets/Redheart.png"),
  },
  {
    foodIMG: require("../assets/GlowingBerryFruitSalad.png"),
    priceOFmeal: "N 8,000",
    nameOfmeal: "Berry mango Combo",
    heart: require("../assets/heartLike.png"),
    addToCart: require("../assets/AddPlus.png"),
    redHeart: require("../assets/Redheart.png"),
  },
  {
    foodIMG: require("../assets/breakfastQuinoaAndRedFruitSalad.png"),
    priceOFmeal: "N 8,000",
    nameOfmeal: "Berry mango Combo",
    heart: require("../assets/heartLike.png"),
    addToCart: require("../assets/AddPlus.png"),
    redHeart: require("../assets/Redheart.png"),
  },
];

const catigories = ["Popular", "New combo", "Top"];

const FoodDisplaySection2 = [
  {
    foodIMG: require("../assets/breakfastQuinoaAndRedFruitSalad.png"),
    priceOFmeal: "N 10,000",
    nameOfmeal: "Honey Lime Combo",
    heart: require("../assets/heartLike.png"),
    addToCart: require("../assets/AddPlus.png"),
  },
  {
    foodIMG: require("../assets/BestEverTropicalFruitSalad.png"),
    priceOFmeal: "N 10,000",
    nameOfmeal: "Berry mango Combo",
    heart: require("../assets/heartLike.png"),
    addToCart: require("../assets/AddPlus.png"),
  },
  {
    foodIMG: require("../assets/GlowingBerryFruitSalad.png"),
    priceOFmeal: "N 8,000",
    nameOfmeal: "Berry mango Combo",
    heart: require("../assets/heartLike.png"),
    addToCart: require("../assets/AddPlus.png"),
  },
];

export default function HomeScreenOne({ navigation }) {
  const [isToggled, setToggled] = useState(true);
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.sectionOne}>
          <View style={styles.hamBuggerMenu}>
            <View style={styles.hamTop} />
            <View style={styles.hamButtom} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("myBucketView")}
            style={styles.cartView}
          >
            <Image
              style={styles.cartBasketImg}
              source={require("../assets/cartBasket.png")}
            />
            <View>
              <Text style={styles.cartBasketText}>My basket</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.HelloNameTextView}>
          <Text style={styles.HelloNameText}>
            Hello {}, What fruit salad combo do you want today?{" "}
          </Text>
        </View>
        <View style={styles.sarchAndFilterSection}>
          <View style={styles.searchSection}>
            <View style={styles.searchIconImgView}>
              <Image
                style={styles.searchIconImg}
                source={require("../assets/searchIcon.png")}
              />
            </View>

            <TextInput
              style={styles.searchTextArea}
              placeholder="sarch for fruit salad combo"
            />
          </View>
          <View style={styles.filterView}>
            <Image
              style={styles.filterImg}
              source={require("../assets/filterButton.png")}
            />
          </View>
        </View>
        <View style={styles.HelloNameTextView}>
          <Text style={styles.RecommendedComboText}>Recommended Combo</Text>
        </View>
        <View style={styles.parentScrollView}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.scroolView1}
          >
            {FoodDisplaySection.map(
              (
                {
                  foodIMG,
                  priceOFmeal,
                  nameOfmeal,
                  heart,
                  redHeart,
                  addToCart,
                },
                index
              ) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("AddToBasketScreen")}
                    key={index.toString()}
                    style={styles.RecoViews}
                  >
                    <Image source={foodIMG} style={styles.FOODimg} />
                    <TouchableOpacity
                      style={styles.heartChange}
                      onPress={() => {
                        setToggled(!isToggled);
                      }}
                    >
                      <Image
                        source={isToggled ? heart : redHeart}
                        style={styles.heartImg}
                      />
                    </TouchableOpacity>

                    <Text style={styles.mealName}>{nameOfmeal}</Text>
                    <View style={styles.priceAndPlus}>
                      <Text style={styles.price}>{priceOFmeal}</Text>
                      <Image source={addToCart} style={styles.addToCartImg} />
                    </View>
                  </TouchableOpacity>
                );
              }
            )}
          </ScrollView>
        </View>
        <View style={styles.bigAndAll}>
          <View style={styles.babaTExt}>
            <Text style={styles.babaTxt}>Hottest</Text>
          </View>
          <View style={styles.capHotZone}>
            {catigories.map((fu, index) => {
              return (
                <View style={styles.hotZone} key={index.toString()}>
                  <Text style={styles.hotZoneText}>{fu}</Text>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.parentScrollView}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.scroolView1}
          >
            {FoodDisplaySection2.map(
              (
                { foodIMG, priceOFmeal, nameOfmeal, heart, addToCart },
                index
              ) => {
                return (
                  <View key={index.toString()} style={styles.RecoViews}>
                    <Image source={foodIMG} style={styles.FOODimg} />
                    <Image source={heart} style={styles.heartImg} />
                    <Text style={styles.mealName}>{nameOfmeal}</Text>
                    <View style={styles.priceAndPlus}>
                      <Text style={styles.price}>{priceOFmeal}</Text>
                      <Image source={addToCart} style={styles.addToCartImg} />
                    </View>
                  </View>
                );
              }
            )}
          </ScrollView>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: "center",
  },
  sectionOne: {
    flexDirection: "row",
    marginTop: 55,
  },
  hamBuggerMenu: {
    height: 11,
    width: 22,

    marginLeft: 24,
  },
  hamTop: {
    height: 2.75,
    width: 22,
    backgroundColor: "#070648",
  },
  hamButtom: {
    marginTop: 5.5,
    height: 2.75,
    width: 13.75,
    backgroundColor: "#070648",
  },
  cartView: {
    width: 41,
    height: 42,
    marginLeft: 264,
    alignItems: "center",
  },
  cartBasketImg: {
    height: 24,
    width: 24,
  },
  cartBasketText: {
    fontSize: 7,
    fontWeight: "100",
    marginTop: 3,
  },
  HelloNameTextView: {
    height: 58,
    width: 257,
    marginLeft: 24,
  },
  HelloNameText: {
    fontWeight: "500",
    fontSize: 20,
    flexWrap: "wrap",
  },
  sarchAndFilterSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchSection: {
    height: 56,
    width: 288,
    backgroundColor: "#F3F4F9",
    borderRadius: 20,
    marginLeft: 21,
    flexDirection: "row",
  },
  searchIconImgView: {
    position: "absolute",
    top: 20,
    left: 24,
  },
  searchIconImg: {
    height: 16,
    width: 16,
    // position: "absolute",
  },
  searchTextArea: {
    marginLeft: 56,
  },
  filterView: {
    marginLeft: 10,
  },
  filterImg: {
    height: 19,
    width: 29,
  },

  RecommendedComboText: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 30,
  },
  // mainHOladThescrool: {
  //   flexDirection: "row",
  // },
  parentScrollView: {
    // height: 199,
    backgroundColor: "#F3F4F9",
  },
  scroolView1: {
    flexDirection: "row",
    // height: 199,
    paddingLeft: 24,
  },
  RecoViews: {
    height: 183,
    width: 152,
    backgroundColor: "#ffffff",
    marginRight: 23,
    borderRadius: 25,
    // marginBottom: 48,
    marginTop: 24,
    // alignItems: "center",
    // justifyContent: "flex-start",
  },
  FOODimg: {
    height: 80,
    width: 80,
    marginLeft: 36,
    marginTop: 22,
    position: "absolute",
  },
  heartChange: {
    position: "absolute",
    height: 25,
    width: 25,
  },
  heartImg: {
    height: 14.32,
    width: 16,
    top: 16,
    right: 0,
    position: "absolute",
  },
  mealName: {
    marginTop: 110,
    marginLeft: 16,
  },
  priceAndPlus: {
    marginTop: 14,
    marginLeft: 17,
    height: 47,
    width: 157,
    flexDirection: "row",
    // position: "absolute",
  },
  price: {
    marginLeft: 0,
    color: "#F08626",
  },
  addToCartImg: {
    height: 24,
    width: 24,
    marginLeft: 38,
  },
  capHotZone: {
    flexDirection: "row",
    backgroundColor: "#F3F4F9",
  },
  hotZone: {
    // height: 37,
    marginRight: 30,
    marginTop: 0,
    flexDirection: "row",
  },
  bigAndAll: {
    flexDirection: "row",
    backgroundColor: "#F3F4F9",
  },
  babaTExt: {
    marginTop: 48,
    marginRight: 30,
    marginLeft: 24,
    backgroundColor: "#F3F4F9",
  },
  babaTxt: {
    fontSize: 24,
    fontWeight: "500",
  },
  hotZoneText: {
    fontWeight: "500",
    fontSize: 16,
    paddingTop: 53,
    color: "#938DB5",
    marginRight: 32,
  },
});
