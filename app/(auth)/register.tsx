import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import registerLogo from '@/assets/images/Create Your Account 2.png'
import Card from '@/components/Global/Card'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import GoogleIcon from '@/assets/google Icon.svg'
import { Link, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import AppForm from '@/components/forms/Form'
import AppFormField from '@/components/forms/AppFormField'
import SubmitButton from '@/components/forms/SubmitButton'
import * as Yup from 'yup'
import Checkbox from 'expo-checkbox';
import FormCheckBox from '@/components/forms/CheckBox'
import { UserService } from '@/services/users'
import { UserData } from '@/types'
import { UserCredential } from 'firebase/auth'
import Toast from 'react-native-root-toast'
import CustomToast from '@/components/Toast'

interface FORMDATA {
  fullname: string
  email: string,
  password: string,
  loggedIn: boolean
  pricing: boolean
}
const initialValues: FORMDATA = {
  email: "",
  password: "",
  fullname: "",
  loggedIn: false,
  pricing: false
}
const schema  = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  fullname: Yup.string().required(),
  loggedIn: Yup.boolean(),
  pricing: Yup.boolean()
})


export default function RegisterScreen() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

  let dupUserRef: UserCredential
  const handleSubmit = async(values: FORMDATA) => {
    setIsLoading(true)
    try {
      const {user} = await UserService.registerUser(values.email, values.password)
     dupUserRef = user
      UserService.setUserData<UserData>( {email: values.email, fullname: values.fullname, id: user.user.uid, password: ""} ).then(() => {
        setIsLoading(false)
        CustomToast("Register Successfull", "success")
        router.push('login')
      })
      
    } catch (error) {
      console.log(error)
      dupUserRef.user.delete()
      CustomToast("Register Successfull", "error")
      setIsLoading(false)
    }
  }


  return (
    <SafeAreaView   className=' bg-light-secondary flex h-full w-full items-center justify-start py-6 px-7'>
      <View className=' items-center my-6 w-full'>
        <Image source={registerLogo} width={187.7} height={200}  className=' w-[187] h-[200]'/>
        <ThemedText type='title' className='my-5'>Create Your Account</ThemedText>
      </View>

      <View className=' w-full gap-2'>
            <AppForm initialValues={initialValues} validationSchema={schema}  onSubmit={handleSubmit}>

              <AppFormField className='bg-white'>
                <AppFormField.Icon Icon={<FontAwesome name="user-o" size={24} color={Colors.secondary} />} />
                <AppFormField.TextInput  className=' px-3 py-3 rounded-lg text-lg text-secondary w-full' placeholderTextColor={Colors.primary} placeholder='fullname' textContentType='name' name='fullname' />
              </AppFormField>
              <AppFormField.ErrorMessage name='fullname' />
              <AppFormField className='bg-white'>
                <AppFormField.Icon Icon={<MaterialCommunityIcons name='email-outline' size={24} color={Colors.secondary} />} />
                <AppFormField.TextInput className=' w-full text-lg text-secondary' placeholderTextColor={Colors.primary} placeholder='email' name='email' textContentType='emailAddress' />
              </AppFormField>
              <AppFormField.ErrorMessage name='email' />

              <AppFormField className='bg-white'>
                <AppFormField.Icon Icon={<MaterialCommunityIcons name='lock-outline' size={24} color={Colors.secondary} />} />
                <AppFormField.TextInput name='password' className=' w-full text-lg text-secondary' placeholderTextColor={Colors.primary} placeholder='password' secureTextEntry textContentType='password' />
              </AppFormField>
              <AppFormField.ErrorMessage name='password' />

            <FormCheckBox label='Keep me signed in' name='loggedIn' checkedColor='red' color='blue'/>  
              <FormCheckBox label='Email me about special pricing and more' name='pricing' checkedColor='red' color='blue' />            
          
              <SubmitButton title='Create Account' loading={isLoading} />
            </AppForm>
      </View>

      <View className='mt-3 w-full items-center'>
        <ThemedText>---------- or sign in with ---------</ThemedText>
        <View className=' flex-row gap-2 my-2' >
            <Card className=' w-[50%] flex gap-3 flex-row items-center justify-center my-1'>
              <GoogleIcon width={40} height={30} />
              <ThemedText type='subtitle'>Google</ThemedText>
            </Card>
            <Card className=' flex w-[50%] gap-3 flex-row items-center  justify-center my-1'>
              <Ionicons name="logo-facebook" size={30}  color="#1772EA" />
              <ThemedText type='subtitle'>Facebook</ThemedText>
            </Card>
        </View>
          <ThemedText className='text-xl'>Already have an account?   
            <Link href={'login'}>     
              <ThemedText type='link' className='text-secondary ml-3'> Sign In</ThemedText>
            </Link>
          </ThemedText>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})