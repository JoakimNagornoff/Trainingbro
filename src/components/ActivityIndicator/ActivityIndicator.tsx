import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const ActivityIndicatorLoad = () => (
  <View style={style.container}>
    <ActivityIndicator
      animating
      color="#008000"
      size="large"
      style={style.activityIndicator}></ActivityIndicator>
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
});

export default ActivityIndicatorLoad;
