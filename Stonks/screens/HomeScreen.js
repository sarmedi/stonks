import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Card, Button, Icon  }from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
//Function for HomeScreen
export default function HomeScreen() {
  const navigation = useNavigation();
  //adds Navigation
  return (
    //view to create cards and title.  Each card holds a link to the stock page and a picture of the company and the stock ticker
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.getStartedContainer}>

          <Text style={styles_home.titleText}>$tonks</Text>
          <Image
            source={
               require('../assets/images/app_icon.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>

          <Text style={styles_home.titleTextA}>{"\n"}{"\n"}Today's Recommended</Text>
          <Text></Text>
          <Card
            title='AAPL'
            image={require('../assets/images/Apple_gray_logo.png')}>
            <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{backgroundColor: '#1A741D', borderRadius: 0, marginLeft: 75, marginRight: 75, marginBottom: 10}}
    onPress={() => navigation.navigate('Stock Page', {ticker: "AAPL"})}
    title='View     ' />
          
          <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{backgroundColor: '#1A741D', borderRadius: 0, marginLeft: 75, marginRight: 75, marginBottom: 0}}
    onPress={() => navigation.navigate('Predictions Page', {ticker: "AAPL"})}
    title='Predictions' />
          </Card>
          <Card
            title='MSFT'
            image={require('../assets/images/msft_logo_crop.jpg')}>
            <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{backgroundColor: '#1A741D', borderRadius: 0, marginLeft: 75, marginRight: 75, marginBottom: 10}}
    onPress={() => navigation.navigate('Stock Page', {ticker: "MSFT"})}
    title='View     ' />
          <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{backgroundColor: '#1A741D', borderRadius: 0, marginLeft: 75, marginRight: 75, marginBottom: 0}}
    onPress={() => navigation.navigate('Predictions Page', {ticker: "MSFT"})}
    title='Predictions' />
          </Card>
          <Card
            title="GOOGL"
            image={require('../assets/images/image-20150902-6700-t2axrz.jpg')}>
            <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{backgroundColor: '#1A741D', borderRadius: 0, marginLeft: 75, marginRight: 75, marginBottom: 10}}
    onPress={() => navigation.navigate('Stock Page', {ticker: "GOOGL"})}
    title='View     ' />
          <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{backgroundColor: '#1A741D', borderRadius: 0, marginLeft: 75, marginRight: 75, marginBottom: 0}}
    onPress={() => navigation.navigate('Predictions Page', {ticker: "MSFT"})}
    title='Predictions' />
          </Card>
        </View>
        

      </ScrollView>
    </View>
  );
}
//StyleSheet
var styles_home = StyleSheet.create({
  titleText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#1A741D',
  },
  titleText2: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  titleText3: {
    fontSize: 35,
    fontWeight: 'bold',
    
  },
  homePage: {
    backgroundColor: '#fafafa'              
  },
  titleTextA: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#1A741D',
  },
})

HomeScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
