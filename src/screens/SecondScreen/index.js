import { View, Text } from "react-native";
import React from "react";

const SecondScreen = ({ route }) => {
  return (
    <View>
      <Text>{route.params.language}</Text>
    </View>
  );
};

export default SecondScreen;
