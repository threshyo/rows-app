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
      The scientists aren't sure whether we should send it as there is a 60% chance that it could fail and hit the earth killing millions
      <RowItem
        title="Cancel it and go and see your family"
        onPress={() => navigation.push ("Options3")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        title="Continue with the plan"
        onPress={() => navigation.push ("Meteor")}
        rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
      />

      <RowSeparator />

      <RowItem
        title="Cancel it and put out a warning to go into a bunker"
        onPress={() => navigation.push ("Bunker")}
        rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
      />
    </SafeAreaView>
  );
};