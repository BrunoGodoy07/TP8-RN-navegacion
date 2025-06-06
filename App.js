import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//
// ST1: FORMULARIO -> CONFIRMACIÓN
//
function FormScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  return (
    <View style={[styles.screen, { backgroundColor: '#FFB6C1' }]}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput style={styles.input} onChangeText={setNombre} value={nombre} />

      <Text style={styles.label}>Teléfono</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTelefono}
        value={telefono}
        keyboardType="phone-pad"
      />

      <Button
        title="Confirmar"
        onPress={() => navigation.navigate('Confirmacion', { nombre, telefono })}
      />
    </View>
  );
}

function ConfirmScreen({ route, navigation }) {
  const { nombre, telefono } = route.params;

  return (
    <View style={[styles.screen, { backgroundColor: '#FFB6C1' }]}>
      <Text style={styles.text}>Hola {telefono}</Text>
      <Text style={styles.text}>Tu teléfono es: {nombre}</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

function StackUno() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Formulario" component={FormScreen} />
      <Stack.Screen name="Confirmacion" component={ConfirmScreen} />
    </Stack.Navigator>
  );
}

//
// ST2: AMARILLO CON IMAGEN
//
function Yellow1({ navigation }) {
  return (
    <View style={[styles.screen, { backgroundColor: '#FFD700' }]}>
      <Text style={styles.text}>Pantalla Amarilla 1</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 60, height: 60, marginBottom: 20 }}
      />
      <Button title="Ir a Amarilla 2" onPress={() => navigation.navigate('Amarilla2')} />
    </View>
  );
}

function Yellow2({ navigation }) {
  return (
    <View style={[styles.screen, { backgroundColor: '#FFD700' }]}>
      <Text style={styles.text}>Pantalla Amarilla 2</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

function StackDos() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Amarilla1" component={Yellow1} />
      <Stack.Screen name="Amarilla2" component={Yellow2} />
    </Stack.Navigator>
  );
}

//
// ST3: VERDE
//
function Green1({ navigation }) {
  return (
    <View style={[styles.screen, { backgroundColor: '#32CD32' }]}>
      <Text style={styles.text}>Pantalla Verde 1</Text>
      <Button title="Ir a Verde 2" onPress={() => navigation.navigate('Verde2')} />
    </View>
  );
}

function Green2({ navigation }) {
  return (
    <View style={[styles.screen, { backgroundColor: '#32CD32' }]}>
      <Text style={styles.text}>Pantalla Verde 2</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

function StackTres() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Verde1" component={Green1} />
      <Stack.Screen name="Verde2" component={Green2} />
    </Stack.Navigator>
  );
}

//
// ST4: AZUL
//
function Blue1({ navigation }) {
  return (
    <View style={[styles.screen, { backgroundColor: '#87CEFA' }]}>
      <Text style={styles.text}>Pantalla Azul 1</Text>
      <Button title="Ir a Azul 2" onPress={() => navigation.navigate('Azul2')} />
    </View>
  );
}

function Blue2({ navigation }) {
  return (
    <View style={[styles.screen, { backgroundColor: '#87CEFA' }]}>
      <Text style={styles.text}>Pantalla Azul 2</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

function StackCuatro() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Azul1" component={Blue1} />
      <Stack.Screen name="Azul2" component={Blue2} />
    </Stack.Navigator>
  );
}

//
// APP PRINCIPAL CON TABS
//
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Inicio') return <Ionicons name="person" size={size} color={color} />;
            if (route.name === 'Galería') return <Ionicons name="image" size={size} color={color} />;
            if (route.name === 'Naturaleza') return <Ionicons name="leaf" size={size} color={color} />;
            if (route.name === 'Info') return <Ionicons name="information-circle" size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={StackUno} />
        <Tab.Screen name="Galería" component={StackDos} />
        <Tab.Screen name="Naturaleza" component={StackTres} />
        <Tab.Screen name="Info" component={StackCuatro} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//
// ESTILOS
//
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
