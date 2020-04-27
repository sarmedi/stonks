import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import RecommendedScreen from '../screens/RecommendedScreen';
import TutorialScreen from "../screens/TutorialScreen";
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route), headerTintColor: '#fff', headerStyle: {backgroundColor: '#1A741D',} });
//Has a link to each screen that we created, to display it in the main screen of the app
  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions = {{
        activeTintColor: '#fff',
        inactiveTintColor: '#D2D2D2',
        style: {
          backgroundColor: '#1A741D'
        },
      }} 
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={focused ? "home" : "home-outline"} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={LinksScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={focused ? "feature-search" : "feature-search-outline"} />,
        }}
      />
      <BottomTab.Screen
        name="Recommended"
        component={RecommendedScreen}
        options={{
          title: 'Recommended',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={focused ? "star" : "star-outline"} />,
        }}
      />
      <BottomTab.Screen
        name="Tutorial"
        component={TutorialScreen}
        options={{
          title: 'Tutorial',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={focused ? "help-circle" : "help-circle-outline"} />,
        }}
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
