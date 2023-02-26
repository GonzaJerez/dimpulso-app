import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import { LightText } from "../text/LightText";
import { ThemeContext } from "../../context/theme/ThemeContext";
import { AuthContext } from "../../context/auth/AuthContext";

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { theme } = useContext(ThemeContext);
  const { logout } = useContext(AuthContext);

  return (
    <View style={style.container}>
      {/* LOGO */}
      <View style={style.logoContainer} testID="prueba">
        <Text style={style.logoText}>Dismpulso</Text>
      </View>

      {/* Menu items */}
      <DrawerContentScrollView {...props}>
        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* Logout button */}
      <TouchableOpacity style={style.logoutContainer} onPress={logout}>
        <Ionicons
          name="log-out-outline"
          size={18}
          style={style.logoutIcon}
          color={theme.lightText}
        />
        <LightText style={style.logoutText}>Cerrar sesión</LightText>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 30,
    fontStyle: "italic",
  },
  logoutContainer: {
    marginBottom: 30,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  logoutIcon: {
    marginRight: 10,
    transform: [{ rotate: "180deg" }],
  },
  logoutText: {
    fontSize: 12,
  },
});
