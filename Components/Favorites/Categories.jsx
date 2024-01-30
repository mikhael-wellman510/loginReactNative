import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { FontAwesome6, AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={style.aa}>
        <View style={style.ab}>
          <FontAwesome6 name="sliders" size={15} color="black" />

          <Text>Filter</Text>
        </View>
        <View style={style.ab}>
          <Text>Recomended</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
        </View>
        <View style={style.ab}>
          <Text>Free Test Drive</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
        </View>
        <View style={style.ab}>
          <Text>Automatic</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
        </View>
        <View style={style.ab}>
          <Text>Manual</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
        </View>
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  aa: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
  },
  ab: {
    gap: 15,
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
    alignItems: "center",
    height: 40,
  },
});
