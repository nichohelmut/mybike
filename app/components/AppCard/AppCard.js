import React from "react";
import { Image, View, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import colors from "../../config/colors";
import AppText from "../AppText";

function AppCard({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

export default AppCard;
