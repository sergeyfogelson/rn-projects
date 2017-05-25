// Index.ios - ios code only here

// Import library to create Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create the Component
const App = () => (
    <Header />
  );

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
