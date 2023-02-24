import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const HomeScreen = () => {
  return (
    <View style={style.container}>
      <Text>HomeScreen</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    }
})