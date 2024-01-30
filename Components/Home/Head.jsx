import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Head() {
  return (
    <View>
      <View style={style.h1}>
        <View style={style.h2}>
          <View style={style.h3}>
            <Ionicons name="location-outline" size={24} color="black" />
          </View>
          <View>
            <Text style={style.text}>Location</Text>
            <Text style={style.textB}>Jakarta Selatan</Text>
          </View>
        </View>

        <View style={style.h3}>
          <MaterialCommunityIcons
            name="bell-badge-outline"
            size={24}
            color="black"
          />
        </View>
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
  h1: {
    marginTop: 20,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  h2: {
    // backgroundColor: "grey",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  h3: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
    width: 40,
    height: 40,
    borderColor: "grey",
    borderWidth: 0.2,
    borderRadius: 8,
  },
});
