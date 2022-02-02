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
      <Text>The strike has a problem you need to choose whether to blow it up in the top left or top right, One trusts the US with the explosion and one side trusts Russia, which do you choose?</Text>

      <RowItem
        title="Russia"
        onPress={() => navigation.push ("Europe")}
        rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
      />

<RowItem
        title="US"
        onPress={() => navigation.push ("US")}
        rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
      />

    </SafeAreaView>
  );
};