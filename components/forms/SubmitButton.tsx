import { View, Text, Pressable, PressableProps, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'
import { ThemedText } from '../ThemedText'

export default function SubmitButton({title, loading}: {title: string, loading: boolean}) {
  const {handleSubmit} = useFormikContext()
  return (
    <View className='w-full bg-secondary flex flex-row items-center px-2 h-[60px]  gap-4 rounded-md'>
    <TouchableOpacity className=' w-full px-3 py-3 rounded-md items-center'  onPress={handleSubmit as () => void}>
     <ThemedText>{loading ? "loading...": title}</ThemedText>
    </TouchableOpacity>
  </View>
  )
}