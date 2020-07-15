import axios from 'axios';
import React, { Component, useState, useEffect } from "react";
import { ScrollView } from 'react-native-gesture-handler';
import {StyleSheet, Text, View, Platform, Dimensions, ActivityIndicator } from "react-native";
import {WebView} from "react-native-webview";

import {
    LineChart,
  } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';

const labels_=['2020-04-17','2020-04-20','2020-04-21','2020-04-22', '2020-04-23','2020-04-24', '2020-04-27'];
const formatted_labels = ['04/17','04/20','04/21','04/22', '04/23','04/24', '04/27'];
function StockPage({ route, navigation }) {
  //Default values and functions to modify the variables for holding data
    const {ticker} = route.params;
    const [val, setVal] = useState('Time Series (Daily)');
    const [api, setApi] = useState('');
    const [open, setOpen] = useState('');
    const [high, setHigh] = useState('');
    const [close, setClose] = useState('');
    const [volume, setVolume] = useState('');
    const [weekclose, setWeekClose]=useState([]);
    const [weekmax, setWeekMax] = useState('');
    const [weekmin, setWeekMin] = useState('');
    const [results, setResults] = useState([{}]);
    
    const [line, setLine] = useState({
            
        labels: ['04-17','04-20','04-21','04-22', '04-23','04-24', '04-27'],
        datasets: [
          {
            data: [0,0,0,0,0,0,0],
            strokeWidth: 2, // optional
          },
        ],
      });
    const [loaded, SetLoaded] =useState(false);
    //When using react native hooks, useEffect() is the same as ComponentDidMount -> runs before rendering.
    useEffect(() =>{
      //API Call to get Data
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=YJR5ZU3OSHN6F0EZ`).then(res => res.json())
        .then((result_) => {
            // Update the state of results array
            setResults(result_);
            var data_api = {
                labels: formatted_labels,
                datasets: [
                    {
                        data: [result_["Time Series (Daily)"][labels_[0]]["4. close"], result_["Time Series (Daily)"][labels_[1]]["4. close"],result_["Time Series (Daily)"][labels_[2]]["4. close"],result_["Time Series (Daily)"][labels_[3]]["4. close"],result_["Time Series (Daily)"][labels_[4]]["4. close"],result_["Time Series (Daily)"][labels_[5]]["4. close"],result_["Time Series (Daily)"][labels_[6]]["4. close"]],
                        strokeWidth: 2,
                    }
                ]
            }

            setLine(data_api);
            setClose(result_["Time Series (Daily)"][labels_[6]]["4. close"]);
            setOpen(result_["Time Series (Daily)"][labels_[6]]["1. open"]);
            setHigh(result_["Time Series (Daily)"][labels_[6]]["2. high"]);
            setVolume(result_["Time Series (Daily)"][labels_[6]]["5. volume"]);
            setWeekClose([Number(result_["Time Series (Daily)"][labels_[0]]["4. close"]), Number(result_["Time Series (Daily)"][labels_[1]]["4. close"]),Number(result_["Time Series (Daily)"][labels_[2]]["4. close"]),Number(result_["Time Series (Daily)"][labels_[3]]["4. close"]),Number(result_["Time Series (Daily)"][labels_[4]]["4. close"]),Number(result_["Time Series (Daily)"][labels_[5]]["4. close"]),Number(result_["Time Series (Daily)"][labels_[6]]["4. close"])]);
            setWeekMax(Math.max.apply(Math, weekclose));
            setWeekMin(Math.min.apply(Math, weekclose));
            SetLoaded(true);
            //Set values for all the data
        }).catch(error => {
            console.log('found error', error)
          });
    }
    );
    //Checks if data is loaded. If it is, display the chart, if not display a loading indicator
    if (!loaded){
        return (
            <ActivityIndicator size="large" color="#1A741D" />
        );
    }else{
        return (
          //View to display stockPage, which includes data, lineChart for historical data, and webView of tweets
            <ScrollView>
                    <Text style={styles_stock.titleText}>
                        {ticker}
                    </Text>
                    <Text style={styles_stock.titleText2}>
                        Close: {close}
                    </Text>
                    <Text style={styles_stock.titleText2}>
                        Open: {open}
                    </Text>
                    <Text style={styles_stock.titleText2}>
                    </Text>
                    <Text style={styles_stock.titleText2}>
                        Past Week:
                    </Text>
                    <LineChart
                        data={line}
                        width={Dimensions.get('window').width} // from react-native
                        height={220}
                        yAxisLabel={'$'}
                        chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 16
                        }}
                    />
                    <Text style={styles_stock.titleText2_}></Text>
                    <Text style={styles_stock.titleText3}>
                        Key Information [{formatted_labels[6]}]:
                    </Text>
                    <Text style={styles_stock.titleText2}>
                    </Text>
                    
                    <Text style={styles_stock.titleText2_}>
    
                        Volume: {Number(volume).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                    </Text>
                    <Text></Text>
                    <Text style={styles_stock.titleText3}>
                        Relevant Tweets:
                    </Text>
                    <View style={{ height: 600}}>
                    <WebView
                      automaticallyAdjustContentInsets={false}
                      source={{uri: "https://twitter.com/search?q=%24"+ticker+"&src=typed_query&f=live"}}
                    />
                  </View>
                    
                </ScrollView>
        );
    }
    
    
} export default StockPage
var styles_stock = StyleSheet.create({
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
    titleText2_: {
        fontSize: 25,
        //fontWeight: 'bold',
        fontStyle: 'italic'
      },
    titleText3: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'#1A741D'
      },
    homePage: {
      backgroundColor: '#fafafa'              
    }
  })
  const labels_=['2020-04-06','2020-04-07','2020-04-08','2020-04-09', '2020-04-13','2020-04-14', '2020-04-15'];
  const formatted_labels = ['04/06','04/07','04/08','04/09', '04/13','04/14', '04/15'];





  /**/