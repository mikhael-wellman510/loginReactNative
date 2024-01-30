import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import bmw from "../../Foto/Mobil/bmw.png";
import ferari from "../../Foto/Mobil/ferari.png";
import toyota from "../../Foto/Mobil/toyota.png";

export default function TopBrands() {
  return (
    <>
      <View style={style.container}>
        <View style={style.tb}>
          <Text style={style.textBc}>Top Brands</Text>
          <Text>View All</Text>
        </View>
        <View style={style.tb1}>
          <View style={style.tb3}>
            <Image style={style.tb2} source={bmw} />
            <Text style={style.textB}>Bmw</Text>
          </View>
          <View style={style.tb3}>
            <Image style={style.tb2} source={ferari} />
            <Text style={style.textB}>Ferrari</Text>
          </View>
          <View style={style.tb3}>
            <Image style={style.tb2} source={toyota} />
            <Text style={style.textB}>Toyota</Text>
          </View>
        </View>
      </View>
    </>
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
  textBc: {
    fontFamily: "Nunito_500Medium",
    fontWeight: "bold",
    fontSize: 23,
  },
  container: {
    gap: 20,
    marginBottom: 30,
  },
  tb: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tb1: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 80,
  },
  tb2: {
    width: 50,
    height: 50,
  },
  tb3: {
    alignItems: "center",
    height: 100,
    width: 110,
    justifyContent: "center",
    borderWidth: 0.4,
    borderColor: "grey",
    borderRadius: 13,
    gap: 10,
  },
});
