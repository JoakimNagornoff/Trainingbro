import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const BackButton = props => {
  return (
    <TouchableOpacity style={props.style2} onPress={props.onPress}>
      <Text style={style.buttonText}>X</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  buttonText: {
    fontSize: 22,
  },
});

export default BackButton;
