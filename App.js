import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './components/MapScreen';
import Home from './components/Home'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Home/>
    </View>
  );
}

function MapDisplay() {
  return (
    <MapScreen/>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {



  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Maps" component={MapDisplay} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

