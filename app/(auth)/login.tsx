import { Image, ImageBackground, StyleSheet, Text, View, SafeAreaView, TextInput, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ThemedText } from '@/components/ThemedText'
import Card from '@/components/Global/Card'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import GoogleIcon from '@/assets/google Icon.svg'
import { Link, router } from 'expo-router'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants/Colors'
import AppFormField from '@/components/forms/AppFormField'
import AppForm from '@/components/forms/Form'
import * as Yup from 'yup'
import SubmitButton from '@/components/forms/SubmitButton'
import Toast from 'react-native-root-toast'
import { UserService } from '@/services/users'
import CustomToast from '@/components/Toast'

interface FORMDATA {
  email: string,
  password: string
}
const initialValues: FORMDATA = {
  email: "",
  password: ""
}
const schema  = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
})

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit =async (values:FORMDATA) => {
    console.log(values)
    setIsLoading(true)
    try {
      const user = await UserService.signInUser(values.email, values.password)
      if(user) {
        CustomToast("Login Successful.", "success")
        setIsLoading(false)
        router.replace('(tabs)')
      }
      
    } catch (error) {
      console.log(error)
      CustomToast("Email or Password not valid.", "error")
      setIsLoading(false)
    }

  }
  return (
      <ImageBackground  source={require('@/assets/images/login-bacground-logo.png')} className='flex-1 items-center justify-end' style={{flex: 1}}>
        <SafeAreaView className='flex px-8 w-full'>
            <ThemedText type='title' className=' text-center capitalize'>Welcome To Monumental habits</ThemedText>

            <Card className=' flex gap-3 flex-row items-center justify-center my-1 mt-8'>
              <GoogleIcon height={30} width={30} />
              <ThemedText>Continue with Google</ThemedText>
            </Card>
            <Card className=' flex gap-3 flex-row items-center justify-center my-1 mb-4'>
              <Ionicons name="logo-facebook" size={30}  color="#1772EA" />
              <ThemedText>Continue with Facebook</ThemedText>
            </Card>
        </SafeAreaView>

        <View className=' h-[420] bg-white w-full rounded-md  px-8  py-7'>
          <ThemedText className=' text-center text-xl capitalize' type="defaultSemiBold">log in with email !</ThemedText>
            
          <ThemedView  className='flex gap-4 py-7'>
            <AppForm initialValues={initialValues} validationSchema={schema}  onSubmit={handleSubmit}>

              <AppFormField>
                <AppFormField.Icon Icon={<MaterialCommunityIcons name='email-outline' size={24} color={Colors.secondary} />} />
                <AppFormField.TextInput className=' w-full text-lg text-secondary' placeholderTextColor={Colors.primary} placeholder='email' name='email' textContentType='emailAddress' />
              </AppFormField>
              <AppFormField.ErrorMessage name='email' />

              <AppFormField>
                <AppFormField.Icon Icon={<MaterialCommunityIcons name='lock-outline' size={24} color={Colors.secondary} />} />
                <AppFormField.TextInput name='password' className=' w-full text-lg text-secondary' placeholderTextColor={Colors.primary} placeholder='password' secureTextEntry textContentType='password' />
              </AppFormField>
              <AppFormField.ErrorMessage name='password' />

              <SubmitButton title='Login' loading={isLoading} />
            </AppForm>
          </ThemedView>
            


            <Link className='text-center text-xl' href={`reset-password`}>
              <ThemedText className='text-center text-xl' type="link">forget password?</ThemedText>
            </Link>
            <ThemedText className='text-center text-xl' type="defaultSemiBold">Don’t have an account? 
              <Link href={'register'}>     
                <ThemedText type='link' className='text-secondary'>Sign Up</ThemedText>
              </Link>
            </ThemedText>
        </View>

      </ImageBackground>
  )
}

const styles = StyleSheet.create({})