import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
export default function HeadFav() {
  const [fontsLoaded, fontError] = useFonts({
    "Open-Sans": require("../../assets/fonts/OpenSans-Bold.ttf"),
  });
  return (
    <View style={style.a}>
      <Ionicons name="arrow-back" size={24} color="black" />
      <Text style={style.b}>Favorites Car</Text>
      <Ionicons name="search-sharp" size={24} color="black" />
    </View>
  );
}

const style = StyleSheet.create({
  a: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    paddingRight: 10,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  b: {
    fontSize: 20,
    fontFamily: "Open-Sans",
  },
});
