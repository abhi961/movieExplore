import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import MovieDetails from '../screens/MovieDetails';

export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
  MovieDetails:{
    movieId:number
  };

};

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='MovieDetails' component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
