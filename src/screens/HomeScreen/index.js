import { View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation, route }) => {
  return (
    <View>
      <Button
        title="English"
        onPress={() => {
          navigation.navigate("Second", {
            language: "english",
          });
        }}
      />
      <Button
        title="French"
        onPress={() => {
          navigation.navigate("Second", {
            language: "french",
          });
        }}
      />
    </View>
  );
};

export default HomeScreen;
