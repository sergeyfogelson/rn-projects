//Import libraries for Component
import React from 'react';
import { Text, View } from 'react-native';

//Make a Component
const Header = () => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> Albums!</Text>
    </View>
  );
};

const styles = {
    viewStyle: {
      backgroundColor: '#F8F8F8'
    },
    textStyle: {
      fontSize: 30
    }
};

// Make component available to other parts of App
export default Header;
