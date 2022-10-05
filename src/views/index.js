import { StyleSheet, Text, View,SafeAreaView,StatusBar,TouchableOpacity, Settings } from 'react-native';
import React,{ Component } from 'react';
import Login from './login';
import Setting from './setting';
import Home from './home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RootComponent() {
  return (
    //<Login/>
    //<Setting/>
    //<Home/>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:true}}>
    <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootComponent;
