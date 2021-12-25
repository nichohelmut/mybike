import React from "react";

import AppText from "./app/components/AppButton";

import { ImageBackground, StyleSheet, View, Image } from "react-native";
import AppButton from "./app/components/AppButton";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppCard from "./app/components/AppCard";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";
import AccountItem from "./app/components/AccountItem";
import ListItem from "./app/components/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return <ListingsScreen />;
}
