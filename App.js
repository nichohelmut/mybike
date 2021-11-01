import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text
} from "react-native";

import {
  useDimensons,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image
          source={{ uri: "https://picsum.photos/500/600" }}
          resizeMode="cover"
          style={styles.backdrop}
        />
      </View>
      <View>
        <Image
          style={styles.logo}
          source={require("./assets/logo_transparent.png")}
        />
      </View>
      <View
        style={{
          backgroundColor: "#fc5c65",
          width: "100%",
          height: 70,
          bottom: 70,
          position: "absolute",
        }}
      />
      <View
        style={{
          backgroundColor: "#4ECDC4",
          width: "100%",
          height: 70,
          bottom: 0,
          position: "absolute",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 350,
    flex: 0.5,
    resizeMode: "contain",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  backdrop: {
    flex: 1,
    flexDirection: "column",
  },
});
