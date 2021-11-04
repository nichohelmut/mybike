import React from "react";
import { Text, ImageBackground, StyleSheet, View, Image } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={{ uri: "https://picsum.photos/500/600" }}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo_transparent.png")}
        />
        <Text style={styles.tagline}>Cool Plots and KPIs</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login"></AppButton>
        <AppButton color="secondary" title="REGISTER"></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 350,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  buttonContainer: {
    justifyContent: "flex-end",
    width: "80%",
    paddingBottom: 20,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
  },
});
