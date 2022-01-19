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

export default () => {
  return (
    <SafeAreaView>
      <RowItem
        title="Profile"
        onPress={() => Linking.openURL("https://threshyo.github.io")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        title="Converter"
        onPress={() => Linking.openURL("https://github.com/threshyo/converteryh")}
        rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
      />

      <RowSeparator />

      <RowItem
        title="An App"
        onPress={() => Linking.openURL("https://github.com/threshyo/andrew")}
        rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
      />
    </SafeAreaView>
  );
};