import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/Settings';
import FavoriteStockScreen from './Screens/FavoriteStockScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const initialState = {
  action:'openMenu'

}

const reducer = (state =initialState) =>{
  return state;
}



const Tab = createBottomTabNavigator();

const store = createStore(reducer);
const App=()=> {
  return(
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings-outline' : 'settings-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          else if (route.name === 'FavoriteStock') {
            iconName = focused ? 'list' : 'list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="FavoriteStock" component={FavoriteStockScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
    </Provider>

  )
  
}

export default App;

