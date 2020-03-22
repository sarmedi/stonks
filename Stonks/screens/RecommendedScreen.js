import * as React from 'react';
import { StyleSheet, Text, View, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView, FlatList } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';
import BeginnerRecommendedScreen from './recommendedScreens/BeginnerRecommendedScreen';
import IntermediateRecommendedScreen from './recommendedScreens/IntermediateRecommendedScreen';
import AdvancedRecommendedScreen from './recommendedScreens/AdvancedRecommendedScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function myTabs() {
    return (
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
        </Tab.Navigator>
    );
}


