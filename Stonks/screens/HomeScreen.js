import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Card, Button, Icon  }from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
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

          <Text style={styles_home.titleTextA}>Today's Recommended Stocks</Text>
          <Card
            title='AAPL'
            image={require('../assets/images/Apple_gray_logo.png')}>
            <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{backgroundColor: '#1A741D', borderRadius: 0, marginLeft: 75, marginRight: 75, marginBottom: 0}}
    onPress={() => navigation.navigate('Stock Page', {ticker: "AAPL"})}
    title='VIEW NOW' />
          </Card>
          <Card
            title='MSFT'
            image={require('../assets/images/msft_logo_crop.jpg')}>
            <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{backgroundColor: '#1A741D', borderRadius: 0, marginLeft: 75, marginRight: 75, marginBottom: 0}}
    onPress={() => navigation.navigate('Stock Page', {ticker: "MSFT"})}
    title='VIEW NOW' />
          </Card>
          <Card
            title='AMZN'
            image={require('../assets/images/amazon-logo-square.png')}>
            <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{backgroundColor: '#1A741D', borderRadius: 0, marginLeft: 75, marginRight: 75, marginBottom: 0}}
    onPress={() => navigation.navigate('Stock Page', {ticker: "AMZN"})}
    title='VIEW NOW' />
          </Card>
        </View>
        

      </ScrollView>
    </View>
  );
}

var styles_home = StyleSheet.create({
  titleText: {
    fontSize: 60,
    fontWeight: 'bold',
    fontFamily: 'Copperplate',
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
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#1A741D',
  },
})

HomeScreen.navigationOptions = {
  header: null,
};
const labels_=['2020-03-26','2020-03-27','2020-03-30','2020-03-31', '2020-04-01','2020-04-02', '2020-04-03'];
const formatted_labels = ['03/26','03/27','03/30','03/31', '04/01','04/02', '04/03'];

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
    width: 100,
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
