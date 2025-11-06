import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Test = () => {
  return (
    <View style={styles.container}> 
      <Text> Hallo </Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});