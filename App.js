import { StatusBar } from "expo-status-bar";
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

const FoodDisplaySection = [
  {
    foodIMG: require("./assets/HoneyLimePeachFruitSalad.png"),
    priceOFmeal: "N 2,000",
    nameOfmeal: "Honey Lime Combo",
    heart: require("./assets/heartLike.png"),
    addToCart: require("./assets/AddPlus.png"),
  },
  {
    foodIMG: require("./assets/GlowingBerryFruitSalad.png"),
    priceOFmeal: "N 8,000",
    nameOfmeal: "Berry mango Combo",
    heart: require("./assets/heartLike.png"),
    addToCart: require("./assets/AddPlus.png"),
  },
  {
    foodIMG: require("./assets/breakfastQuinoaAndRedFruitSalad.png"),
    priceOFmeal: "N 8,000",
    nameOfmeal: "Berry mango Combo",
    heart: require("./assets/heartLike.png"),
    addToCart: require("./assets/AddPlus.png"),
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionOne}>
        <View style={styles.hamBuggerMenu}>
          <View style={styles.hamTop} />
          <View style={styles.hamButtom} />
        </View>
        <View style={styles.cartView}>
          <Image
            style={styles.cartBasketImg}
            source={require("./assets/cartBasket.png")}
          />
          <View>
            <Text style={styles.cartBasketText}>My basket</Text>
          </View>
        </View>
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
              source={require("./assets/searchIcon.png")}
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
            source={require("./assets/filterButton.png")}
          />
        </View>
      </View>
      <View style={styles.HelloNameTextView}>
        <Text style={styles.RecommendedComboText}>Recommended Combo</Text>
      </View>

      <ScrollView style={styles.scroolView1}>
        {FoodDisplaySection.map(
          ({ foodIMG, priceOFmeal, nameOfmeal, heart, addToCart }) => {
            return (
              <ScrollView style={styles.RecoViews}>
                <Image source={{ foodIMG }} style={styles.FOODimg} />
                <Image source={{ heart }} style={styles.heartImg} />
                <Text>{nameOfmeal}</Text>
                <View>
                  <Text>{priceOFmeal}</Text>
                  <Image source={{ addToCart }} style={styles.addToCartImg} />
                </View>
              </ScrollView>
            );
          }
        )}
      </ScrollView>
    </View>
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
  scroolView1: {
    flexDirection: "row",
    height: 183,
    marginLeft: 24,
  },
  RecoViews: {
    height: 183,
    width: 152,
  },
});
