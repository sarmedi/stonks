import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import StockPage from './screens/recommendedScreens/stockScreen';
import PredictionsPage from './screens/predictionsScreen';
import LinksScreen from './screens/predictionsScreen';
import HomeScreen from './screens/predictionsScreen';
import {
  setCustomText
} from 'react-native-global-props'


const Stack = createStackNavigator();
//App.js is used to set up navigation using React's built in stack navigator
export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'san-francisco': require('./assets/fonts/SFProDisplay-Regular.ttf'),
        }).then(() => {
          setCustomText({
            style: {
              fontFamily: 'san-francisco'
            }
          })
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);
//loading screen, or sends view to the home screen class.
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator
           
          >
            <Stack.Screen name=" " component={BottomTabNavigator} />
            <Stack.Screen name="Stock Page" component={StockPage} />
            <Stack.Screen name="Predictions Page" component={PredictionsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
