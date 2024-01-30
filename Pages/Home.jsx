import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import Head from "../Components/Home/Head";
import Search from "../Components/Home/Search";
import TopBrands from "../Components/Home/TopBrands";
import CarRecomendation from "../Components/Home/CarRecomendation";
const Home = ({ navigation }) => {
  const { user } = useUser();
  console.log("hhss:", user);
  return (
    <>
      <View style={style.container}>
        <Head />
        <Search />
        <TopBrands />
        <CarRecomendation />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
});
export default Home;
