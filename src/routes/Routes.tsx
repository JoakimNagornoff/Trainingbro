import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import Home from '../screens/home/Home';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../store';
import {Provider} from 'react-redux';
import Schedule from '../screens/Schedule/Schedule';
import {MaterialIcon} from '../components/Icons/Icons';
import {COLORS} from '../constans';
import thunkMiddleware from 'redux-thunk';

interface RoutesProps {
  navigation: any;
}
const Stack = createNativeStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log('store state:');
  console.log(JSON.stringify(store.getState()));
});

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottonTabNavigator>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Schedule" component={Schedule} />
          </Stack.Navigator>
        </BottonTabNavigator>
      </NavigationContainer>
    </Provider>
  );
};

const Tab = createBottomTabNavigator();

export const BottonTabNavigator = (props: any) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 65,
        },
      }}
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const icons = {
            Home: 'home',
            Schedule: 'calendar-range',
          };
          return (
            <MaterialIcon
              name={icons[route.name]}
              color={focused ? COLORS.accent : COLORS.black}
              size={'large'}></MaterialIcon>
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Schedule" component={Schedule} />
    </Tab.Navigator>
  );
};
