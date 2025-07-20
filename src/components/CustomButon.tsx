import {  Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { customButtonStyle } from '../style/style';

interface CustomButonProps {
    title: string;
    onPress: () => void;
    
}

const CustomButon:React.FC<CustomButonProps> = ({ title, onPress}) => {
  return (
   <TouchableOpacity onPress={onPress}  style={customButtonStyle.buttonContainer}>
    <Text style={customButtonStyle.buttonText}>{title}</Text>
   </TouchableOpacity>
  )
}

export default CustomButon