import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Tabs' component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

var userA = 0;
var passA = 0;

const Login = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  userA = user;
  passA = pass;

  const onPress = async () => {
    if (user === 'admin' && pass === '1234') {
      Alert.alert('Login bem sucedido.');
      navigation.navigate('Tabs');
    } else {
      Alert.alert('Login falhou. Verifique suas credenciais.');
    }
  };

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
          placeholder='User'
          placeholderTextColor='gray'
        />
        <TextInput
          value={pass}
          onChangeText={setPass}
          style={styles.formInput}
          placeholder='Password'
          placeholderTextColor='gray'
        />
        <Pressable
          style={styles.form_btn}
          onPress={onPress}
          accessibilityLabel='Login with this button'
        >
          <Text style={styles.btn_label}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <View>
      <Text>UHUUUL</Text>
    </View>
  );
};

function Settings() {
  return <View />;
}

function Search() {
  return <View />;
}

const Tab = createBottomTabNavigator();

function MyTabs({ navigation }) {
  if (userA === "admin" && passA === "1234") {
    return (
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarActiveTintColor: '#FF6347',
          tabBarInactiveTintColor: '#FF6347',
          tabBarStyle: {
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              if (focused) {
                return <Ionicons name='home' size={size} color={color} />;
              } else {
                return <Ionicons name='home-outline' size={size} color={color} />;
              }
            },
          }}
        />
        <Tab.Screen
          name='Settings'
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              if (focused) {
                return <Ionicons name='settings' size={size} color={color} />;
              } else {
                return <Ionicons name='settings-outline' size={size} color={color} />;
              }
            },
          }}
        />
        <Tab.Screen
          name='Search'
          component={Search}
          options={{
            tabBarLabel: 'Search',
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              if (focused) {
                return <Ionicons name='search' size={size} color={color} />;
              } else {
                return <Ionicons name='search-outline' size={size} color={color} />;
              }
            },
          }}
        />
      </Tab.Navigator>
    );
  };
  navigation.navigate("Login");
}

const styles = StyleSheet.create({
  l_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title_box: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#22A2F2',
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
    padding: 10,
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
    color: '#fff',
  },
});