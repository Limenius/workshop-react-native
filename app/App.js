import React, {Component} from 'react';

import Movie from './components/Movie';
import MovieList from './components/MovieList';
import Actor from './components/Actor';

import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Colors from './styles/colors';

const Styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.subtleAccent,
  },
});

const AppNavigator = createStackNavigator(
  {
    Home: {screen: MovieList},
    Movie: {screen: Movie},

    // Add the Actor screen
  },
  {
    navigationOptions: {
      headerTintColor: Colors.accent,
      headerStyle: Styles.header,
    },
  },
);

const App = createAppContainer(AppNavigator);

export default App;
