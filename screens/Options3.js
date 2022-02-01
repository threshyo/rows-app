import { Linking } from "react-native";
import React from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import Colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
import { RowItem, RowSeparator } from "../components/RowItem";

export default ({navigation}) => {
  return (
    <SafeAreaView>
      You say goodbye to your family and kiss your wife. However, your daughters tell you they hate you for not trying to save the planet.
    </SafeAreaView>
  );
};