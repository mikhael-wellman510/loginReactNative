import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import HeadFav from "../Components/Favorites/HeadFav";
import Categories from "../Components/Favorites/Categories";
import ListFavorite from "../Components/Favorites/ListFavorite";

export default function Favorite() {
  const DATA = [
    {
      id: 1,
      nama: "Jeep Rubicons",
      merk: "Jeep",
      rating: "5.0",
      hp: 300,
      transmisi: "Automatic",
      price: "123,798,00",
      img: require("../Foto/favCar/rb4.png"),
    },
    {
      id: 2,
      nama: "Audi TT Coupe",
      merk: "Audi",
      rating: "7.0",
      hp: 470,
      transmisi: "Automatic",
      price: "230,198,00",
      img: require("../Foto/favCar/au1.png"),
    },
    {
      id: 3,
      nama: "Peugeot 5008",
      merk: "peugeot",
      rating: "8.0",
      hp: 350,
      transmisi: "Manual",
      price: "420,110,00",
      img: require("../Foto/favCar/pe3.png"),
    },
    {
      id: 4,
      nama: "Lamborghini Aventador",
      merk: "Lamborgini",
      rating: "8.5",
      hp: 200,
      transmisi: "Automatic",
      price: "220,515,00",
      img: require("../Foto/favCar/la2.png"),
    },
    {
      id: 5,
      nama: "Bugatti Chiron",
      merk: "Bugatti",
      rating: "9.5",
      hp: 300,
      transmisi: "Automatic",
      price: "440,515,00",
      img: require("../Foto/favCar/bg.png"),
    },
    {
      id: 6,
      nama: "Mercedes-AMG GT",
      merk: "Mercedes",
      rating: "7.5",
      hp: 330,
      transmisi: "Automatic",
      price: "550,515,00",
      img: require("../Foto/favCar/mc.png"),
    },
  ];
  return (
    <View style={style.a}>
      <HeadFav />
      <Categories />
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ListFavorite
            nama={item.nama}
            merk={item.merk}
            rating={item.rating}
            hp={item.hp}
            transmisi={item.transmisi}
            price={item.price}
            img={item.img}
            keyExtractor={(item) => item.id}
          />
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  a: {
    flex: 1,
    backgroundColor: "white",
  },
});
