import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";

import audi from "../../Foto/car/audi.png";
import bmw from "../../Foto/car/bmw.png";
import chevrolet from "../../Foto/car/chevrolet.png";
import mercy from "../../Foto/car/mercy.png";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Nunito_500Medium } from "@expo-google-fonts/nunito";
import { Feather } from "@expo/vector-icons";

export default function CarRecomendation() {
  let [fontsLoaded, fontError] = useFonts({
    Nunito_500Medium,
  });

  console.log("hasill:", fontsLoaded);
  const products = [
    { id: 1, name: "Audi A8 Quatro", img: audi, price: 100000 },
    { id: 2, name: "BMW", img: bmw, price: 140000 },
    { id: 3, name: "Chevrolet", img: chevrolet, price: 190000 },
    { id: 4, name: "Mercy", img: mercy, price: 210000 },
  ];
  return (
    <View style={style.parent}>
      <View style={style.c1}>
        <Text style={style.textBC}>Cars Recomendation</Text>
        <Text style={style.text}>View All</Text>
      </View>

      <View style={style.cp}>
        <ScrollView
          style={style.scrool}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {products.map((product) => (
            <View key={product.id} style={style.productContainer}>
              <View style={style.c2}>
                <Text>Logo</Text>
                <AntDesign name="hearto" size={23} color="black" />
              </View>
              <View style={style.img}>
                <Image style={style.foto} source={product.img} />
              </View>
              <View style={style.c3}>
                <View style={style.desc}>
                  <Text style={style.textB}>{product.name}</Text>
                  <View style={style.rating}>
                    <Feather name="star" size={20} color="black" />
                    <Text style={style.text}>4.1</Text>
                  </View>
                </View>
                <View style={style.desc}>
                  <View style={style.desc2}>
                    <MaterialCommunityIcons
                      name="transit-connection-variant"
                      size={24}
                      color="black"
                    />
                    <Text style={style.text}>Manual</Text>
                  </View>

                  <Text style={style.textS}>${product.price}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    fontFamily: "Nunito_500Medium",
  },
  textB: {
    fontFamily: "Nunito_500Medium",
    fontWeight: "bold",
  },
  textBC: {
    fontFamily: "Nunito_500Medium",
    fontWeight: "bold",
    fontSize: 22,
  },
  textS: {
    fontFamily: "Nunito_500Medium",
    fontWeight: "bold",
    color: "blue",
  },
  parent: {
    marginTop: 20,
    gap: 30,
  },

  c1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  productContainer: {
    width: 230,
    height: 280,
    marginRight: 20,
    borderColor: "black",
    // borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#ededed",
  },
  c2: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
    height: 35,
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 7,
  },
  foto: {
    width: 200,
    height: 120,
  },
  desc: {
    flexDirection: "row",
    // backgroundColor: "orange",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    justifyContent: "center",
    alignItems: "center",
    height: 175,
    width: "100%",
    // backgroundColor: "blue",
  },
  c3: { gap: 5, paddingRight: 20, paddingLeft: 20 },
  desc2: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
