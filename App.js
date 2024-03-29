import { StyleSheet, Text, View } from "react-native";
import Login from "./Pages/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation/Navigation";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ClerkProvider
      publishableKey={
        "pk_test_aGFybWxlc3Mtc25ha2UtMjUuY2xlcmsuYWNjb3VudHMuZGV2JA"
      }
    >
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
  },
});
