import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Favorite from "../Pages/Favorite";
import Messages from "../Pages/Messages";
import Profile from "../Pages/Profile";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  const color = {
    color: "red",
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          width: "100%",
          height: 100,

          elevation: 0, // Remove shadow on Android
          borderTopWidth: 0, // Remove border on iOS

          alignItems: "center",
          justifyContent: "center",
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={style.a1} color={{ color }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorite}
        options={{
          tabBarLabel: ({ color }) => <Text style={style.a1}>Favorites</Text>,
          //Pakai color , supaya ketika di klik berubah warna
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: ({ color }) => <Text style={style.a1}>Messages</Text>,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ color }) => <Text style={style.a1}>Profile</Text>,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const style = StyleSheet.create({
  a1: {
    fontSize: 14,
    // backgroundColor: "blue",
    fontFamily: "Nunito_500Medium",
    alignItems: "center",
    paddingBottom: 30,
  },
});
