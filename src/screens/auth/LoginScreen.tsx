import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth/AuthContext'

export const LoginScreen = () => {

  const {login} = useContext(AuthContext)

  return (
    <View style={style.container}>
      <Button 
        title='Login'
        onPress={login}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  }
})