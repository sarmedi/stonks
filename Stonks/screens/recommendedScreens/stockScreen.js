import axios from 'axios';
import React, { Component, useState, useEffect } from "react";
import { ScrollView } from 'react-native-gesture-handler';
import {StyleSheet, Text, View, Platform, Dimensions, ActivityIndicator } from "react-native";
import {WebView} from "react-native-webview";

import {
    LineChart,
  } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';



//const labels_=['2020-04-17','2020-04-20','2020-04-21','2020-04-22', '2020-04-23','2020-04-24', '2020-04-27'];
//const new_api="bsf234vrh5rf0ieh0g2g";
const new_api = "bsld7ffrh5rb8ivks6og";

function StockPage({ route, navigation }) {
  //Default values and functions to modify the variables for holding data
    const {ticker} = route.params;
    const [val, setVal] = useState('');
    const [api, setApi] = useState('');
    const [open, setOpen] = useState('');
    const [high, setHigh] = useState('');
    const [close, setClose] = useState('');
    const [volume, setVolume] = useState('');
    const [weekclose, setWeekClose]=useState([]);
    const [weekmax, setWeekMax] = useState('');
    const [weekmin, setWeekMin] = useState('');
    const [results, setResults] = useState([{}]);

    const today = Math.floor(new Date().getTime()/1000.0);
    const startDay = today - (86400 * 9);
    const formatted_labels = [];

    function timeConverter(UNIX_timestamp){
      var a = new Date(UNIX_timestamp * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time =  month + ' ' + date + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
      return time;
    }


    //fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=YJR5ZU3OSHN6F0EZ`).then(res => res.json())
        

    const [loaded, SetLoaded] =useState(true);
    //When using react native hooks, useEffect() is the same as ComponentDidMount -> runs before rendering.
    useEffect(() =>{
      //API Call to get Data
        fetch(`https://finnhub.io/api/v1/stock/candle?symbol=${ticker}&resolution=D&from=${startDay}&to=${today}&token=bsld7ffrh5rb8ivks6og`).then(res => res.json())
        .then((result_) => {
            // Update the state of results array
            setResults(result_);
            console.log(result_);
            const dates = result_["t"].slice(0,7);

            for (var i = 0; i < dates.length; i++){
              const converted = timeConverter(dates[i]);
              formatted_labels.push(converted.substr(0,6));
            }
            
            var data_api = {
                labels: formatted_labels,
                datasets: [
                    {
                        data: [result_["c"][0],result_["c"][1],result_["c"][2],result_["c"][3],result_["c"][4],result_["c"][5],result_["c"][6]],
                        strokeWidth: 2,
                    }
                ]
            }

            setLine(data_api);
            //Close, open, high, volume data for current day
            setClose(result_["c"][6]);
            setOpen(result_["o"][6]);
            setHigh(result_["h"][6]);
            setVolume(result_["v"][6]);
            //Close data for each of the 7 days
            setWeekClose([Number(result_["c"][0]), Number(result_["c"][1]),Number(result_["c"][2]),Number(result_["c"][3]),Number(result_["c"][4]),Number(result_["c"][5]),Number(result_["c"][6])]);
            setWeekMax(Math.max.apply(Math, weekclose));
            setWeekMin(Math.min.apply(Math, weekclose));
            SetLoaded(true);
            // //Set values for all the data
        }).catch(error => {
            console.log('found error', error)
          });
    }
    );

    const [line, setLine] = useState({
        
        
      //labels: dates,
      datasets: [
        {
          data: [0,0,0,0,0,0,0],
          strokeWidth: 2, // optional
        },
      ],
    });
            
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
                        height={250}
                        yAxisLabel={'$'}
                        chartConfig={{
                        fontFamily: 'Helvetica',
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
                        marginHorizontal: 10,
                        borderRadius: 16
                        }}
                    />
                    <Text style={styles_stock.titleText2_}></Text>
                    <Text style={styles_stock.titleText3}>
                        Key Information [{timeConverter(today)}]:
                    </Text>
                    <Text style={styles_stock.titleText2}>
                    </Text>
                    
                    <Text style={styles_stock.titleText2_}>
    
                        Volume: {Number(volume).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                    </Text>
                    <Text></Text>
            
                    
                </ScrollView>
        );
    }
    
    
} export default StockPage
var styles_stock = StyleSheet.create({
    titleText: {
      marginLeft: 10,
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: "left",
      color:'#1A741D'
    },
    titleText2: {
      marginLeft: 10,
      fontSize: 25,
      fontWeight: 'bold',
    },
    titleText2_: {
      marginLeft: 10,
        fontSize: 25,
        //fontWeight: 'bold',
        fontStyle: 'italic'
      },
    titleText3: {
      marginLeft: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color:'#1A741D'
      },
    homePage: {
      backgroundColor: '#fafafa'              
    }
  })





  /**/