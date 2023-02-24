import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export const CustomDrawer = (props:DrawerContentComponentProps) => {
  return (
    <View style={{flex:1, marginTop:50}}>
        <DrawerContentScrollView {...props}>
            <View>
                <Text>Dismpulso</Text>
            </View>
            <View>
                <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
    </View>
  )
}
