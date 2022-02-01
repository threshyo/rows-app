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
      <Text>Scientists are saying that an asteroid will be hitting the planet within 2 hours. What should you do? </Text>
      <RowItem
        title="Get some scientists together to create a missile which can split the meteor up"
        onPress={() => navigation.push ("Missile")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        title="Go home and see your family"
        onPress={() => navigation.push ("Options3")}
        rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
      />

      <RowSeparator />

      <RowItem
        title="Put an alert out to get everyone into a bunker"
        onPress={() => navigation.push ("Bunker")}
        rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
      />
    </SafeAreaView>
  );
};