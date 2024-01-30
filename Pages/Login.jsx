import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NativeBaseProvider, Input } from "native-base";

import tes from "../Foto/tes.png";
import google from "../Foto/google.png";
import { useUser } from "@clerk/clerk-react";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../Hooks/useWarmUpBrowser";
import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Navigation from "../Navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const Logins = async (username, password) => {
    try {
      console.log("test: ", username);
      console.log("pw: ", password);
      const login = await axios.post(
        "http://10.10.100.238:8080/api/auth/login",
        {
          username,
          password,
        }
      );
      if (login) {
        setValid(true);
        navigation.navigate("Home");
      }

      const token = login.data.data.token;

      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.log(error.message);
    }
  };

  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <>
      {valid ? (
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      ) : (
        <NativeBaseProvider>
          <ScrollView contentContainerStyle={style.scrollContainer}>
            <View style={style.a1}>
              <View style={style.t1}>
                <Image style={style.logo} source={tes} />
                <View style={style.text}>
                  <Text style={style.tc}>Let's Sign you in.</Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#c5c4d5",

                      width: 320,
                    }}
                  >
                    Sign in with your data that you have entered during your
                    registration
                  </Text>
                </View>
              </View>
              <View style={style.t2}>
                <View style={style.tt}>
                  <Text style={{ paddingLeft: 5, color: "#b4b3c8" }}>
                    Email
                  </Text>
                  <Input
                    onChangeText={setUsername}
                    value={username}
                    borderColor={"#b4b3c8"}
                    variant={"underlined"}
                  />
                </View>
                <View style={style.tt}>
                  <Text style={{ paddingLeft: 5, color: "#b4b3c8" }}>
                    Password
                  </Text>
                  <Input
                    onChangeText={setPassword}
                    value={password}
                    borderColor={"#b4b3c8"}
                    variant={"underlined"}
                  />
                </View>

                <Text style={style.tt1}>Forget Password?</Text>
              </View>
              <View style={style.t3}>
                <TouchableOpacity
                  onPress={() => Logins(username, password)}
                  style={style.button}
                >
                  <Text style={{ color: "white" }}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress} style={style.button1}>
                  <Image source={google} style={style.google} />
                  <Text>Sign In With Google</Text>
                </TouchableOpacity>
                <Text style={{ color: "#bbbbbb" }}>
                  Don't have an account?
                  <Text style={{ color: "#050049" }}> Register</Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </NativeBaseProvider>
      )}
    </>
  );
};
const style = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  input: {},

  a1: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    gap: 50,
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  t1: {
    gap: 10,
    alignItems: "center",
    width: 280,
  },
  t2: {
    width: 280,
    gap: 30,
  },
  t3: {
    width: 280,
    gap: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  tt: {
    gap: 10,
  },
  tt1: {
    marginLeft: 170,
    fontSize: 13,
    fontWeight: "bold",
    color: "#050049",
  },

  text: {
    alignItems: "center",
    width: 220,
    gap: 10,
  },
  tc: {
    color: "#050049",

    fontSize: 25,

    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#050049",
    width: 300,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: "white",
    width: 300,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    color: "#050049",
    borderColor: "#050049",
    borderWidth: 1,
  },
  google: {
    width: 30,
    height: 30,
  },
});
export default Login;
