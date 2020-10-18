import React, {useState}  from 'react';
import { StatusBar, StyleSheet, Text, View, Button, FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/Routes';
//This is the entry point of the application.
export default function App() {

  return(
      <Routes/>
  )
}
