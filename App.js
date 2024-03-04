import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ActivityIndicator, Pressable, Alert } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <Login />
  );
}

function Login() {

  const [user, setUser] = useState(" ");
  const [pass, setPass] = useState(" ");

  const onPress = async () => {
    if (user === "admin" && pass === "1234") {
      Alert.alert("Login bem sucedido")
    } else {
      Alert.alert("Login falhou. Verifique suas credenciais.");
    }
  }

  return (
    <View style={styles.l_container}>
      <View style={styles.title_box}>
        <Text style={styles.title}>PetFamily</Text>
      </View>
      <View style={styles.form_box}>
        <TextInput
          value={user}
          onChangeText={setUser}
          style={styles.formInput}
          placeholder="User"
          placeholderTextColor="gray"></TextInput>
        <TextInput
          value={pass}
          onChangeText={setPass}
          style={styles.formInput}
          placeholder="Password"
          placeholderTextColor="gray"></TextInput>
        <Pressable
          style={styles.form_btn}
          onPress={onPress}
          accessibilityLabel="Login with this button"
        ><Text style={styles.btn_label}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: "#FF6347",
        tabBarInactiveTintColor: "#FF6347",
        tabBarStyle: {
          height: 60
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />
            } else {
              return <Ionicons name="home-outline" size={size} color={color} />
            }
          }
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="settings" size={size} color={color} />
            } else {
              return <Ionicons name="settings-outline" size={size} color={color} />
            }
          }
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="search" size={size} color={color} />
            } else {
              return <Ionicons name="search-outline" size={size} color={color} />
            }
          }
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  l_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'fixed',
  },
  title_box: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'Helvetica'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#22A2F2'
  },
  form_box: {
    justifyContent: 'space-evenly',
    height: 250,
  },
  formInput: {
    width: 300,
    height: 50,
    borderWidth: 1.5,
    borderColor: '#22A2F2',
    borderRadius: 5,
    padding: 10
  },
  form_btn: {
    height: 50,
    width: 300,
    backgroundColor: '#22A2F2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_label: {
    fontWeight: 'bold',
    color: '#fff'
  }
});
