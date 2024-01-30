import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import au1 from "../../Foto/favCar/au1.png";
import rb4 from "../../Foto/favCar/rb4.png";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
export default function ListFavorite({
  nama,
  merk,
  rating,
  hp,
  transmisi,
  price,
  img,
}) {
  const [fontsLoaded, fontError] = useFonts({
    "Open-Sans": require("../../assets/fonts/OpenSans-Bold.ttf"),
  });
  return (
    <>
      <View style={style.container}>
        <View style={style.a}>
          <View style={style.c}>
            <Image style={style.img} resizeMode="contain" source={img} />
          </View>

          <View style={style.d}>
            <View>
              <Text style={{ fontSize: 17, fontFamily: "Open-Sans" }}>
                {nama}
              </Text>
            </View>
            <View style={style.b}>
              <Text style={{ color: "grey" }}>{merk}</Text>
              <View style={style.e}>
                <FontAwesome name="star" size={15} color="orange" />
                <Text>{rating}</Text>
              </View>
            </View>
          </View>
        </View>
        {/* batas */}
        <View>
          <View style={style.btm1}>
            <View style={style.btm3}>
              <View style={style.btm2}>
                <Entypo name="rocket" size={13} color="grey" />
                <Text style={{ color: "grey" }}>{hp} hp</Text>
              </View>
              <View style={style.btm2}>
                <MaterialCommunityIcons
                  name="transit-connection-variant"
                  size={13}
                  color="grey"
                />
                <Text style={{ color: "grey" }}>{transmisi}</Text>
              </View>
            </View>

            <View>
              <Text style={style.btmT}>${price}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: "#f8fafc",
    borderRadius: 20,
  },
  a: {
    flexDirection: "row",
  },
  b: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  c: {
    width: "40%",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
  },
  d: {
    width: "60%",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    gap: 8,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  e: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  btm1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,

    borderTopWidth: 0.2,
    borderTopColor: "grey",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    // Adjust as needed
  },
  btm2: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  btm3: {
    flexDirection: "row",
    gap: 20,
  },
  btmT: {
    color: "blue",
  },
});
