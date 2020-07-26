import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import RecommendedScreen from '../screens/RecommendedScreen';
import TutorialScreen from "../screens/TutorialScreen";
import { Ionicons } from '@expo/vector-icons';
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerStyle: {backgroundColor: '#fff',height:35, shadowColor: 'transparent'} });
//Has a link to each screen that we created, to display it in the main screen of the app
  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search';
          } else if (route.name==='Recommended'){
            iconName=focused ? "ios-stats":"ios-stats";
          }else if (route.name==='Tutorial'){
            iconName = focused ? "ios-help-circle":"ios-help-circle-outline"
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions = {{
        activeTintColor: '#1A741D',
        inactiveTintColor: '#D2D2D2',
        style: {
          backgroundColor: '#fff'
        },
      }} 
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
      />
      <BottomTab.Screen
        name="Search"
        component={LinksScreen}
        
      />
      <BottomTab.Screen
        name="Recommended"
        component={RecommendedScreen}
        
      />
      <BottomTab.Screen
        name="Tutorial"
        component={TutorialScreen}
        
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Search':
      return 'Search';
    case 'Recommended':
      return 'Recommended';
    case 'Tutorial':
      return 'Tutorial';
  }
}
