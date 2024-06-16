import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'
import { useField, useFormikContext } from 'formik'
import { ThemedText } from '../ThemedText'
import { Colors } from '@/constants/Colors'

export default function FormCheckBox({checkedColor, color, name, label, ...otherProps} : {color: string, name: string, checkedColor: string, label: string}) {
  const [checked, setChecked] = useState(false)
  const {handleChange, setFieldValue, values} = useFormikContext()
  const [filed, meta] = useField(name)
  console.log(meta.value, name)
  return (
      <View className=' flex flex-row gap-2 mt-2'>
              <Checkbox
                value={meta.value}
                onValueChange={ (value) => setFieldValue(name, value)}
                // onChange={() => setFieldValue(name, !meta.value)}
                color={meta.value ? Colors.primary : Colors.secondary}
                {...otherProps}
              />
              <ThemedText type='default'>{label}</ThemedText>
      </View>
  )
}