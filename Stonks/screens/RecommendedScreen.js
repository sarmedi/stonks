import * as React from 'react';
import BeginnerRecommendedScreen from './recommendedScreens/BeginnerRecommendedScreen';
import IntermediateRecommendedScreen from './recommendedScreens/IntermediateRecommendedScreen';
import AdvancedRecommendedScreen from './recommendedScreens/AdvancedRecommendedScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import stockScreen from "./recommendedScreens/stockScreen";
import { TabView } from 'react-native-tab-view';

const Tab = createMaterialTopTabNavigator();

export default function myTabs() {
    return (
        /* Create the menu at the top of the page to switch between
            different experience levels */
        <Tab.Navigator
            initialRouteName ="Beginner"
            tabBarOptions={{
                activeTintColor: '#000',
                labelStyle: {fontSize: 16},
                style: {
                    backgroundColor: '#fafafa'
                },
                indicatorStyle: {
                    backgroundColor: '#000'
                },
            }}
        >
            {/* The 3 screens to navigate between */}
            <Tab.Screen 
                name='Beginner' 
                component={BeginnerRecommendedScreen}
                options={{ tabBarLabel: 'Beginner' }} 
            />
            <Tab.Screen 
                name='Intermediate' 
                component={IntermediateRecommendedScreen} 
                options={{ tabBarLabel: 'Intermediate' }}
            />
            <Tab.Screen 
                name='Advanced' 
                component={AdvancedRecommendedScreen} 
                options={{ tabBarLabel: 'Advanced' }}
            />
            <Tab.Screen
                name="Test"
                component={stockScreen} 
                options={{ tabBarLabel: 'Test' }}
            />
        </Tab.Navigator>
    );
}


