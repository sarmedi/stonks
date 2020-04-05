import axios from 'axios';
import React, { Component } from "react";
import {StyleSheet, Text, View, Platform, Dimensions } from "react-native";
import {
    LineChart,
  } from 'react-native-chart-kit'


  var line = {
    
    labels: ['2020-03-26','2020-03-27','2020-03-30','2020-03-31', '2020-04-01','2020-04-02', '2020-04-03'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2, // optional
      },
    ],
  };

const { API_KEY } = "OJZ1MR03G7F21DHM";
const test="Time Series (Daily)";
const othertest='2020-03-26';
const otherval='4. close'

export default class stockPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 'Time Series (Daily)',
            api:'',
            results:[{}],
            line: {
            
                labels: ['03-26','03-27','03-30','03-31', '04-01','04-02', '04-03'],
                datasets: [
                  {
                    data: [44.8500, 44.9600, 46.7800, 46.6400,46.3500, 47.5800, 48.3800],
                    strokeWidth: 2, // optional
                  },
                ],
              }
        }
    }
    componentDidMount() {
        
        // Use this URL to request data from our alpha vantage database
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=HRL&apikey=OJZ1MR03G7F21DHM`)
        .then(res => {
          // Update the state of results array
          this.setState({ results: res.data });
        })
    }
    render() {
        console.log(this.state.results[0]);
        return (
            <View>
                
                <LineChart
                    data={this.state.line}
                    width={Dimensions.get('window').width} // from react-native
                    height={220}
                    yAxisLabel={'$'}
                    chartConfig={{
                    backgroundColor: '#1A741D',
                    backgroundGradientFrom: '#1A741D',
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
            </View>
            );
    }
}

var styles_stock = StyleSheet.create({
    titleText: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: "left",
    },
    titleText2: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    homePage: {
      backgroundColor: '#fafafa'              
    }
  })