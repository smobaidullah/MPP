import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const CustomButton = ({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress: () => void;
  style?: object;
}) => {
  return (
    <View style={[styles.button, style]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
