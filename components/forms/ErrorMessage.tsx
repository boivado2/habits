import React from "react";
import { StyleSheet, Text } from "react-native";
import { ThemedText } from "../ThemedText";


function ErrorMessage({ error, visible }: {error?: string, visible?: boolean}) {
  if (!visible || !error) return null;

  return <Text className="text-sm text-red-500 " style={{fontFamily: "Klashik"}}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: { color: "red", marginVertical: 10 },
});

export default ErrorMessage;