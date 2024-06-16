import { View, Text } from 'react-native'
import React from 'react'
import Toast from 'react-native-root-toast';

export default function CustomToast(msg: string, type: "success" | "error" | "custom") {

  let color: string
  if (type === 'success') {
    color = "green"
  } else if (type === "error") { color = "red" }
  else { color = type }

  return Toast.show(msg, {
    duration: Toast.durations.LONG,
    position: Toast.positions.TOP,
    backgroundColor: color
  });

}