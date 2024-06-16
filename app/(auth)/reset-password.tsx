import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import registerLogo from '@/assets/images/forgot-password-logo.png'
import Card from '@/components/Global/Card'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import GoogleIcon from '@/assets/google Icon.svg'
import { Link } from 'expo-router'
import { Colors } from '@/constants/Colors'



export default function ResetPasswordScreen() {
  return (
    <SafeAreaView   className=' bg-light-secondary flex h-full w-full items-center justify-start py-6 px-7'>
      <View className=' items-center my-6 w-full'>
        <ThemedText type='title' className='my-5 uppercase'>Forgort Your Password</ThemedText>
        <Image source={registerLogo} width={187.7} height={200}  className=' w-[187] h-[200] my-5'/>
      </View>

      <Card className=' w-full gap-4'>

            <View className=' w-full bg-light-secondary flex flex-row items-center px-2 gap-4 rounded-md'>
              <MaterialCommunityIcons name='email-outline' size={24} color={Colors.secondary} />
              <TextInput  className=' px-3 py-3 rounded-lg text-lg text-secondary w-full' placeholderTextColor={Colors.primary} placeholder='Email' textContentType='emailAddress' />
            </View>

        <View className=' w-full  bg-secondary flex flex-row items-center px-2  gap-4 rounded-md'>
          <Pressable onPress={(e) => console.log("login")} className=' w-full px-3 py-6 rounded-md items-center'>
            <ThemedText className=' text-lg'>Send Reset Link</ThemedText>
          </Pressable>
        </View>      
      </Card>

      <View className=' w-full items-center'>
          <ThemedText className='text-xl'>Remember Password?   
            <Link href={'login'}>     
              <ThemedText type='link' className='text-secondary ml-3'> Sign In</ThemedText>
            </Link>
          </ThemedText>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})