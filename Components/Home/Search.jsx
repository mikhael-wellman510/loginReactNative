import { View, Text } from "react-native";
import React from "react";
import search from "../../Foto/searh.png";
import { StyleSheet, TextInput, Image } from "react-native";
export default function Search() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search Cars..." style={styles.input} />
      <Image style={styles.img} source={search} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,

    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 0.6,
    color: "grey",
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    width: "100%",
    paddingLeft: 25,
  },
  img: {
    width: 30,
    height: 30,
    // Margin minus bikin nusuk ke dalam
    marginLeft: -50,
    marginRight: 20,
    alignItems: "center",
    resizeMode: "stretch",
  },
});
