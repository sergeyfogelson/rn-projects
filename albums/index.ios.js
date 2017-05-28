// Index.ios - ios code only here

// Import library to create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create the Component
const App = () => (
  <View>
    <Header headerText={'Albums!'}/>
    <AlbumList />
  </View>
  );

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
