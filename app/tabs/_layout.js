import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack, Tabs } from "expo-router";
import { Foundation, FontAwesome5, Zocial, Feather } from "@expo/vector-icons";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";



const Layout = () => {
  return (
    <ThemeProvider value={DarkTheme}>
      <Tabs 
        // initialRouteName="music"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#2d585a',
        tabBarIconStyle: {color: 'white'},
        tabBarStyle: {height: 74,backgroundColor:'#151926'},
        headerShown: false,
        tabBarLabelStyle:{fontFamily: 'sans-serif-medium', fontSize: 12},
        tabBarItemStyle: {alignItems: 'center', justifyContent: 'center',paddingVertical: 12},
      }}> 
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Foundation name="home" size={28} color={color} />
            ),
            tabBarLabel: 'Home',
          }}
        />

        <Tabs.Screen
          name="music"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="music" size={22} color={color} />
            ),
            tabBarLabel: 'My Music',
          }}
        />
        <Tabs.Screen
          name="hellotunes"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Zocial name="itunes" size={24} color={color} />
            ),
            tabBarLabel: 'Hellotunes',
          }}
        />
        <Tabs.Screen
          name="podcasts"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Zocial name="podcast" size={24} color={color} />
            ),
            tabBarLabel: 'Podcasts',
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="user-check" size={24} color={color} />
            ),
            tabBarLabel: 'My Account',
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
};

export default Layout;

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 50,
    resizeMode: "contain",
    //backgroundColor: 'black'
  },
});
