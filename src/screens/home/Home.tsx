import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Home = () => {
  return (
    <View>
      <Text>HOME</Text>
      <View>
        <TouchableOpacity onPress={() => console.log('hello')}>
          <Text>Add workingDay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
