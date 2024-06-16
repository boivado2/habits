import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }}  />
        <Stack.Screen name="reset-password" options={{ headerShown: true, headerBackground: () => (<View className=' bg-light-secondary'></View>), headerTitle: "", }}  />
      </Stack>
  )
}

const styles = StyleSheet.create({})