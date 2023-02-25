import React, { useContext } from 'react'
import { Text } from 'react-native'
import { ThemeContext } from '../../context/theme/ThemeContext'
import { TextComponentProps } from '../../interfaces/textsComponents-interface';


export const LightText = ({children, style}:TextComponentProps) => {

  const {theme} = useContext(ThemeContext);

  return (
      <Text style={[{color: theme.lightText, ...style}]}>{children}</Text>
  )
}
