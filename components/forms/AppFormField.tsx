import React from "react";
import { useField, useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import { ThemedText } from "../ThemedText";
import { Pressable, TextInput, View } from "react-native";
import { TextInputProps } from "react-native";


interface AppFormFieldTextInputProps extends TextInputProps {
  name: string;
}
function AppFormField({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <View className={`input ${className}`}>
      {children}
    </View>
  );
}

AppFormField.TextInput = ({name, ...otherProps}: AppFormFieldTextInputProps) => {
  const {setFieldTouched, handleChange} = useFormikContext()
  return (
  <TextInput
    onBlur={() => setFieldTouched(name)}
    onChangeText={handleChange(name)}
    {...otherProps}
  />
  )
}

AppFormField.ErrorMessage = ({ name}: {name: string}) => {
  const [field, meta] = useField(name)
 return <ErrorMessage error={meta.error} visible={meta.touched}  />
 
}

AppFormField.Icon = ({Icon}: {Icon: React.ReactNode}) => {
  return Icon
}

AppFormField.Text = ({title, onPress, ...rest}: {title: string, onPress:() => void}) => {
  return <Pressable onPress={onPress}><ThemedText {...rest}>{title}</ThemedText></Pressable>
}

export default AppFormField;
