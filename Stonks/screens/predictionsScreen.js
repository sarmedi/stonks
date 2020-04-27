
import React from "react";
import { ScrollView } from 'react-native-gesture-handler';
import {StyleSheet, Text, View, Image } from "react-native";
import { MonoText } from '../components/StyledText';
import {
    LineChart,
  } from 'react-native-chart-kit';
const images = {
    'GOOGL': require('../assets/images/GOOGL.png'),
    'MSFT': require('../assets/images/MSFT.png'),
    'AAPL': require('../assets/images/AAPL.png'),
};

//StockPage had to be a function b/c that was the only way it works with the navigation
function PredictionsPage({ route, navigation }) {
  const {ticker} = route.params;
    return (
        //View to display stockPage, which includes data, lineChart for historical data, and webView of tweets
          <ScrollView>
                  <Text></Text>
                  <Text style={styles_stock.titleText}>
                      {ticker}
                  </Text>
                  <Text style={styles_stock.titleText2}>
                      Expect this stock's price to increase
                  </Text>
                  <Text></Text>
                  <View>
                      <Image style={styles_stock.image} source={images[ticker]}/>
                  </View>
                  <Text/>
                  <Text style={styles_stock.titleText4}>
                       How does this work?
                  </Text>
                  <Text></Text>
                  <View style={styles_stock.codeHighlightContainer}>
                    <Text> In order to study trends in stock market prices we use moving averages. First, we calculate the moving average over the past 50 days and the moving average over the past 200 days. If the most recent 50 day average is greater than the 200 day average, then the stock value has an increasing trend. If the 50 day average is less than the 200 day average, then the stock value has a decreasing trend.</Text>
                  </View>
              </ScrollView>
      );
    
    
} export default PredictionsPage

var styles_stock = StyleSheet.create({
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
    titleText: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: "left",
      color:'#1A741D'
    },
    titleText2: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    titleText4: {
        fontSize: 20,
        fontStyle: 'italic'
      },
    titleText3: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'#1A741D'
      },
    homePage: {
      backgroundColor: '#fafafa'              
    },
    image:{
      width: 400,
      height:300
    }, 
  })