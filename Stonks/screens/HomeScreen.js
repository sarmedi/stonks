import React, {Component, useState, useEffect} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Card, Button, Icon, withTheme  }from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';
//Function for HomeScreen

export default function HomeScreen() {
  const navigation = useNavigation();
  const [results, setResults] = useState([{}]);
  useEffect(()=>{
    fetch("https://finnhub.io/api/v1/news?category=general&token=bsf234vrh5rf0ieh0g2g").then(res => res.json())
    .then((result_) =>{
        setResults(result_);
        //console.log(result_)
    }).catch(error => {
      //console.log('finnhub error', error)
    });

  });
  //adds Navigation
  return (
    //view to create cards and title.  Each card holds a link to the stock page and a picture of the company and the stock ticker
    <View style={styles.container}>
      <View style={{shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,
flex: 1,
    backgroundColor: '#fff',
elevation: 24,}}>
      <Image
          source={
            require('../assets/images/app_icon.png')
          }
          style={{position: "absolute", left: 10, right: 14, width: 44, height:44,top:7}}
        />
        <Text style={styles_home.titleText}>Stonks</Text>
        
        <Text style={styles_home.titleTextA}>{"\n"}Recommended Stocks</Text>
        <Text></Text>
        <View style={styles_home.carouselContainer}>
            <ScrollView style={styles_home.scrollWheel}
                        horizontal={true}
                        contentContainerStyle={{ width: `${100 * 3}%` }}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={200}
                        decelerationRate="fast"
                        pagingEnabled>
                            
              <View style={styles_home.stockCard}>
                <View style={styles_home.cardTop}>
                  <Image style={styles_home.cardImage} source={require('../assets/images/Apple_gray_logo.png')}/>
                </View>
                <TouchableOpacity
                  style={styles_home.cardButton}
                  onPress={() => navigation.navigate('Stock Page', {ticker: "AAPL"})}
                  title='View     '>
                    <Icon name='code' color='#ffffff' />
                    <Text style={styles_home.cardText}> View </Text>
                  </TouchableOpacity>
                <TouchableOpacity
                  style={styles_home.cardButton}
                  onPress={() => navigation.navigate('Predictions Page', {ticker: "AAPL"})}
                  title='Predictions     '>
                    <Icon name='code' color='#ffffff' />
                    <Text style={styles_home.cardText}> Predictions </Text>
                  </TouchableOpacity>
              </View>
              <View style={styles_home.stockCard}>
                <View style={styles_home.cardTop}>
                  <Image style={styles_home.cardImage} source={require('../assets/images/msft_logo_crop.jpg')}/>
                </View>
                <TouchableOpacity
                  style={styles_home.cardButton}
                  onPress={() => navigation.navigate('Stock Page', {ticker: "MSFT"})}
                  title='View     '>
                    <Icon name='code' color='#ffffff' />
                    <Text style={styles_home.cardText}> View </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles_home.cardButton}
                  onPress={() => navigation.navigate('Predictions Page', {ticker: "MSFT"})}
                  title='Predictions     '>
                    <Icon name='code' color='#ffffff' />
                    <Text style={styles_home.cardText}> Predictions </Text>
                  </TouchableOpacity>
                </View>
              <View style={styles_home.stockCard}>
                <View style={styles_home.cardTop}>
                  <Image style={styles_home.cardImage} source={require('../assets/images/google-icon.jpg')}/>
                </View>
                <TouchableOpacity
                  style={styles_home.cardButton}
                  onPress={() => navigation.navigate('Stock Page', {ticker: "GOOGL"})}
                  title='View     '>
                    <Icon name='code' color='#ffffff' />
                    <Text style={styles_home.cardText}> View </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles_home.cardButton}
                  onPress={() => navigation.navigate('Predictions Page', {ticker: "GOOGL"})}
                  title='Predictions     '>
                    <Icon name='code' color='#ffffff' />
                    <Text style={styles_home.cardText}> Predictions </Text>
                  </TouchableOpacity>
              </View>


            </ScrollView>
        </View>
        <Text></Text>

      </View>
      
    </View>
  );
}


//StyleSheet
var styles_home = StyleSheet.create({
  stockCard: {
    backgroundColor: 'white',
    height: 350,
    width: 250,
    borderRadius: 14,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 62.5,
    marginRight: 62.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  cardTop: {
    width: '100%',
    height: 225,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardButton:{
    backgroundColor: '#1A741D',
    width: 160,
    alignItems: 'center',
    paddingVertical: 8,
    justifyContent: 'center',
    flexDirection: "row",
    borderRadius: 5,
    marginTop: 16,
    marginLeft: 45,
    marginRight: 45,
    marginBottom: 0,
  } ,
  cardText:{
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 62,
    fontWeight: 'bold',
    color: '#1A741D',
    left:56,
  },
  titleText2: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  titleText3: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  carouselContainer:{
    paddingBottom: 15,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrollWheel:{
    width: 375,
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
    flexDirection: "column",
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
});
