import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Container from "./Container";

const Entries = [
  {
    foodImg: require("../assets/GlowingBerryFruitSalad.png"),
    foodName: "omo the Food is rice",
    packNumber: "2 Packs",
    Ammount: "N 20, 000",
  },
  {
    foodImg: require("../assets/GlowingBerryFruitSalad.png"),
    foodName: "omo the Food is rice",
    packNumber: "2 Packs",
    Ammount: "N 20, 000",
  },
  {
    foodImg: require("../assets/GlowingBerryFruitSalad.png"),
    foodName: "omo the Food is rice",
    packNumber: "2 Packs",
    Ammount: "N 20, 000",
  },
  {
    foodImg: require("../assets/GlowingBerryFruitSalad.png"),
    foodName: "omo the Food is rice",
    packNumber: "2 Packs",
    Ammount: "N 20, 000",
  },
  {
    foodImg: require("../assets/GlowingBerryFruitSalad.png"),
    foodName: "omo the Food is rice",
    packNumber: "2 Packs",
    Ammount: "N 20, 000",
  },
  {
    foodImg: require("../assets/GlowingBerryFruitSalad.png"),
    foodName: "omo the Food is rice",
    packNumber: "2 Packs",
    Ammount: "N 20, 000",
  },
  {
    foodImg: require("../assets/GlowingBerryFruitSalad.png"),
    foodName: "omo the Food is rice",
    packNumber: "2 Packs",
    Ammount: "N 20, 000",
  },
];

export default function MyBasketBackup({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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

        <ScrollView>
          {Entries.map(({ foodImg, foodName, packNumber, Ammount }, index) => {
            return (
              <View key={index.toString()} style={styles.parentWholeItem}>
                <TouchableOpacity style={styles.touch}>
                  <View style={styles.foodIMGparent}>
                    <Image source={foodImg} style={styles.foodImg} />
                  </View>
                  <View style={styles.nameOfFoodAndnumber}>
                    <Text style={styles.foodName}>{foodName}</Text>
                    <Text>{packNumber}</Text>
                  </View>
                  <View>
                    <Text style={styles.ammount}>{Ammount}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.bottomBase} />
      </Container>

      <View style={styles.lowerLevel}>
        <View style={styles.totalAndFigure}>
          <Text style={styles.totalSpelling}>Total</Text>
          <Text style={styles.total}>N 60,000</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setModalOpen(true);
          }}
          style={styles.checkoutButton}
        >
          <Text>Checkout</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalOpen}>
        <View style={StyleSheet.modalContent}>
          <View style={styles.sliderBodyParent}>
            <View style={{ marginLeft: 160 }}>
              <TouchableOpacity
                onPress={() => {
                  setModalOpen(false);
                }}
              >
                <ImageBackground
                  style={styles.XimgBackground}
                  source={require("../assets/cancleback.png")}
                >
                  <Image
                    style={styles.Ximg}
                    source={require("../assets/canclefrontX.png")}
                  />
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.sliderBody}>
              <View style={styles.DeliveryAdd}>
                <Text style={styles.DeliveryAddTxT}>Delivery address</Text>

                <View style={styles.parentAddAndPhoneNumStyling}>
                  <TextInput
                    style={styles.addAndPhoneNumStyleing}
                    placeholder="10th avenue, Lekki, Lagos state"
                  />
                </View>
              </View>

              <View style={styles.DeliveryAdd}>
                <Text style={styles.DeliveryAddTxT}>Numerb we can call</Text>
                <View style={styles.parentAddAndPhoneNumStyling}>
                  <TextInput
                    style={styles.addAndPhoneNumStyleing}
                    placeholder="090 888 8888"
                  />
                </View>
                <View style={styles.PWCParent}>
                  <TouchableOpacity style={styles.PWC}>
                    <Text>Pay with cards</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
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
  parentWholeItem: {
    marginBottom: 10,
    marginTop: 40,
  },
  touch: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  foodIMGparent: {
    height: 64,
    width: 65,
    marginLeft: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  foodImg: {
    height: 40,
    width: 40,
  },
  nameOfFoodAndnumber: {
    flexWrap: "wrap",
    marginRight: 60,
    // flex: 1,
  },
  ammount: {
    fontWeight: "500",
    fontSize: 16,
  },
  foodName: {
    fontWeight: "500",
    fontSize: 16,
  },
  bottomBase: {
    height: 59,
  },
  lowerLevel: {
    flexDirection: "row",
    marginBottom: 5,
    position: "absolute",
    bottom: 10,
    backgroundColor: "#F3F1F1",
    width: 330,
    alignSelf: "center",
    borderRadius: 20,
  },
  totalAndFigure: {
    marginRight: 24,
    marginLeft: 25,
  },
  totalSpelling: {
    fontWeight: "500",
    fontSize: 16,
  },
  total: {
    fontWeight: "500",
    fontSize: 24,
  },
  checkoutButton: {
    height: 56,
    width: 199,
    backgroundColor: "#FFA451",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },

  XimgBackground: {
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    width: 48,
  },
  Ximg: { height: 16.8, width: 16.8 },
  sliderBody: {
    height: 350,
    width: 360,

    marginTop: 16,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  DeliveryAdd: {
    marginLeft: 24,
  },
  DeliveryAddTxT: {
    fontSize: 20,
    fontWeight: "500",
  },
  parentAddAndPhoneNumStyling: {
    height: 56,
    width: 327,
    backgroundColor: "#F3F1F1",
    marginTop: 16,
    marginBottom: 24,
    borderRadius: 10,
  },
  addAndPhoneNumStyleing: {
    marginLeft: 10,
    height: 56,
    width: 327,
    backgroundColor: "#F3F1F1",
    borderRadius: 2,
  },
  PWCParent: {
    marginLeft: 200,
  },
  PWC: {
    height: 56,
    width: 120,
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
