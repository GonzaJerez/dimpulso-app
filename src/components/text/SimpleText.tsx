import { Text } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/theme/ThemeContext'
import { TextComponentProps } from '../../interfaces/textsComponents-interface';

export const SimpleText = ({children, style}:TextComponentProps) => {

  const {theme} = useContext(ThemeContext);

  return (
      <Text style={{color: theme.colors.text, ...style}}>{children}</Text>
  )
}
