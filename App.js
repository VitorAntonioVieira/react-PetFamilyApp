//VITOR ANTONIO VIEIRA DA SILVA/ SENAI

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert, Image, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Tabs' component={MyTabs} options={{ headerShown: false }} />
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
    <View style={styles.h_container} >
      <Pressable style={styles.logBtn} onPress={logOut}>
        <Text style={styles.logLabel}>Log Out</Text>
      </Pressable>
      <Image source={require('./assets/gradient-wave.png')} />
      <View style={styles.homeTitle}>
        <Text style={styles.titlePet}>Bem-vindo ao PetFamily</Text>
        <Text style={styles.subtitlePet}>A segunda casa do seu bichinho!</Text>
      </View>
    </View >
  );
};

function logOut(navigation){
  userA = 0;
  passA = 0;
}

const Profile = () => {
  const userData = {
    name: 'Nome do Usuário',
    email: 'usuario@email.com',
    phone: '123-456-7890',
    city: 'Cidade do Usuário',
    avatar: 'https://photos.fife.usercontent.google.com/pw/AP1GczOSJMPnhKwh0n6NEfIE8_gkHO-mK0fE3UrlKPQ-m5nk-RdByZ7CeyqA=w361-h641-s-no-gm?authuser=0', // URL temporária da imagem do avatar
  };

  return (
    <View style={styles.p_container}>
      <Image source={require('./assets/photo.webp')} style={styles.avatar} />
      <View style={styles.infoCont}>
        <View style={styles.infoBox}>
          <View style={styles.infoLabel}>
            <Text style={styles.infoTitle}>Nome: </Text>
          </View>
          <Text style={styles.infoText}>{`${userData.name}`}</Text>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoLabel}>
            <Text style={styles.infoTitle}>Email: </Text>
          </View>
          <Text style={styles.infoText}>{`${userData.email}`}</Text>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoLabel}>
            <Text style={styles.infoTitle}>Telefone: </Text>
          </View>
          <Text style={styles.infoText}>{`${userData.phone}`}</Text>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoLabel}>
            <Text style={styles.infoTitle}>Cidade: </Text>
          </View>
          <Text style={styles.infoText}>{`${userData.city}`}</Text>
        </View>
      </View>
    </View >
  );
}


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    // Aqui você pode enviar os dados para um servidor ou exibi-los na tela
    const data = {
      name,
      email,
      phone,
      message,
    };

    // Exibir os dados na tela
    setSubmittedData(data);
  };

  return (
    <View style={styles.l_container}>
      <View style={styles.title_box}>
        <Text style={styles.title}>Entre em Contato</Text>
      </View>
      <View style={styles.contact_box}>
        <TextInput
          style={styles.formInput}
          placeholder="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.formInput}
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.formInput}
          placeholder="Telefone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.formInput}
          placeholder="Mensagem"
          value={message}
          onChangeText={(text) => setMessage(text)}
          multiline
        />
        <Pressable style={styles.form_btn} onPress={handleSubmit}>
          <Text style={styles.btn_label}>ENVIAR</Text>
        </Pressable>
        {submittedData && (
          <View style={styles.submittedData}>
            <Text style={styles.submittedText}>Dados Enviados:</Text>
            <Text>{`Nome: ${submittedData.name}`}</Text>
            <Text>{`E-mail: ${submittedData.email}`}</Text>
            <Text>{`Telefone: ${submittedData.phone}`}</Text>
            <Text>{`Mensagem: ${submittedData.message}`}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs({ navigation }) {
  if (userA === "admin" && passA === "1234") {
    return (
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarActiveTintColor: '#22a2f2',
          tabBarInactiveTintColor: '#22a2f2',
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
          name='Profile'
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              if (focused) {
                return <Ionicons name='person' size={size} color={color} />;
              } else {
                return <Ionicons name='person-outline' size={size} color={color} />;
              }
            },
          }}
        />
        <Tab.Screen
          name='Contact'
          component={Contact}
          options={{
            tabBarLabel: 'Contact',
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              if (focused) {
                return <Ionicons name='at' size={size} color={color} />;
              } else {
                return <Ionicons name='at-outline' size={size} color={color} />;
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

  h_container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logBtn: {
    position: 'absolute',
    height: 45,
    width: 80,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    top: 50, left: 300
  },
  homeTitle: {
    flex: 1,
    position: 'absolute',
    top: 50,
    left: 20,
    justifyContent: 'space-between',
    paddingTop: 100
  },
  titlePet: {
    fontSize: 50,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 20
  },
  subtitlePet: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '300'
  },

  p_container: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  infoCont: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 30
  },
  infoBox: {
    justifyContent: 'space-evenly',
    height: 100,
    width: 310
  },
  infoLabel: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 2
  },
  infoTitle: {
    color: '#22a2f2',
    fontSize: 15,
    fontWeight: "bold"
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    alignItems: 'flex-start'
  },

  contact_box: {
    justifyContent: 'space-evenly',
    height: 400,
  },
});