import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

//Screens
import Home from '../screens/home/Home';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../store';
import {Provider} from 'react-redux';

interface RoutesProps {
  navigation: any;
}
const Stack = createNativeStackNavigator();

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('store state:');
  console.log(JSON.stringify(store.getState()));
});

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
