import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import Container from "./Container";

const FoodDisplaySection = [
  {
    foodIMG: require("../assets/HoneyLimePeachFruitSalad.png"),
    priceOFmeal: "N 2,000",
    nameOfmeal: "Honey Lime Combo",
    heart: require("../assets/heartLike.png"),
    addToCart: require("../assets/AddPlus.png"),
  },
];

const catigories = ["Popular", "New combo", "Top"];

export default function AddToBasketScreen({ navigation }) {
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.topSectionOrange}>
          <View style={styles.parentGoBackView}>
            <TouchableOpacity
              onPress={() => navigation.navigate("homeScreenOne")}
              style={styles.goBack}
            >
              <Image
                style={styles.goBackIMG}
                source={require("../assets/goBackButton.png")}
              />
              <Text>GO back</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.parentPlateIMGView}>
            <Image
              style={styles.mainPlateIMG}
              source={require("../assets/breakfastQuinoaAndRedFruitSalad.png")}
            />
          </View>
          <View style={styles.buttomSection}>
            <View>
              <Text style={styles.fruitName}>Quinoa Fruit Salad</Text>
            </View>
            <View>
              <View style={styles.plusAndminusPrice}>
                <ImageBackground
                  style={styles.minusCrcleIMG}
                  source={require("../assets/circuleHoldMinus.png")}
                >
                  <View style={styles.minus} />
                </ImageBackground>
                <Text style={styles.numCount}>1</Text>
                <View>
                  <Image
                    style={styles.minusCrcleIMG}
                    source={require("../assets/AddPlus.png")}
                  />
                </View>
                <Text style={styles.priceStyling}>N 2,000</Text>
              </View>
            </View>
            <View style={styles.foodDisscriptionTopic}>
              <Text style={styles.topic}>One Pack Contains:</Text>
              <View style={styles.topicButtomLine} />
            </View>
            <View style={styles.parentNote}>
              <Text style={styles.topNote}>
                Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh
                mint.
              </Text>
            </View>
            <View style={styles.parentNote}>
              <Text style={styles.topNote}>
                Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh
                mint.
              </Text>
            </View>
            <View style={styles.loveAndAddtoBasket}>
              <ImageBackground
                style={styles.heartBackground}
                source={require("../assets/heartBackground.png")}
              >
                <Image
                  style={styles.hearton}
                  source={require("../assets/heartLike.png")}
                />
              </ImageBackground>
              <View style={styles.buttonParent}>
                <TouchableOpacity style={styles.addTObasketButton}>
                  <Text>Add to basket</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSectionOrange: {
    backgroundColor: "#FFA451",
  },
  parentGoBackView: {
    marginTop: 64,
    marginLeft: 24,
  },
  goBack: {
    height: 32,
    width: 80,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  goBackIMG: {
    height: 20,
    width: 10,
    marginRight: 4,
  },
  parentPlateIMGView: {
    marginBottom: 32,
    paddingTop: 10,
    marginLeft: 101,
  },
  mainPlateIMG: {
    height: 176,
    width: 176,
  },
  buttomSection: {
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    backgroundColor: "#ffffff",
  },
  fruitName: {
    fontWeight: "500",
    fontSize: 32,
    height: 32,
    width: 231,
    marginBottom: 33,
    marginTop: 40,
    marginLeft: 24,
  },
  plusAndminusPrice: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 24,
  },

  minusCrcleIMG: {
    height: 32,
    width: 32,
  },
  minus: {
    width: 16,
    backgroundColor: "#333333",
    marginHorizontal: 8,
    marginTop: 15,
    height: 2,
  },
  numCount: {
    marginHorizontal: 24,
    fontSize: 24,
    fontWeight: "400",
  },
  priceStyling: {
    fontSize: 24,
    fontWeight: "500",
    marginLeft: 119,
  },
  foodDisscriptionTopic: {
    marginLeft: 24,
    marginTop: 60,
  },
  topic: {
    fontWeight: "500",
    fontSize: 20,
  },
  topicButtomLine: {
    width: 145,
    height: 1,
    backgroundColor: "#FFA451",
  },
  parentNote: {
    // flexWrap: "wrap",
    height: 48,
    width: 326,
    marginLeft: 24,
  },
  topNote: {
    marginTop: 18,
    fontSize: 15,
  },
  loveAndAddtoBasket: {
    marginLeft: 24,
    marginTop: 43,
    flexDirection: "row",
    // alignItems: "center",
  },
  heartBackground: {
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  hearton: {
    height: 21.47,
    width: 24,
  },
  buttonParent: {
    marginLeft: 60,
  },
  addTObasketButton: {
    height: 56,
    width: 219,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFA451",
  },
});
