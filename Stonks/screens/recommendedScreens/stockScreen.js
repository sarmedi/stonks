import axios from 'axios';
import React, { Component } from "react";
import {StyleSheet, Text, View, Platform, Dimensions } from "react-native";
import {
    LineChart,
  } from 'react-native-chart-kit'




const { API_KEY } = "OJZ1MR03G7F21DHM";
const test="Time Series (Daily)";
const othertest='2020-03-26';
const otherval='4. close';
const labels_=['2020-03-26','2020-03-27','2020-03-30','2020-03-31', '2020-04-01','2020-04-02', '2020-04-03'];
const formatted_labels = ['03/26','03/27','03/30','03/31', '04/01','04/02', '04/03'];
export default class stockPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticker: "HRL",
            val: 'Time Series (Daily)',
            api:'',
            open: '',
            close: '',
            volume: '',
            high: '',
            weekclose: [],
            weekmax: '',
            weekmin: '',
            results:[{}],
            line: {
            
                labels: ['03-26','03-27','03-30','03-31', '04-01','04-02', '04-03'],
                datasets: [
                  {
                    data: [0,0,0,0,0,0,0],
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
          this.setState({ results: Object.assign({}, res.data) });
          var data_api = {
              labels: formatted_labels,
              datasets: [
                  {
                      data: [res.data["Time Series (Daily)"][labels_[0]]["4. close"], res.data["Time Series (Daily)"][labels_[1]]["4. close"],res.data["Time Series (Daily)"][labels_[2]]["4. close"],res.data["Time Series (Daily)"][labels_[3]]["4. close"],res.data["Time Series (Daily)"][labels_[4]]["4. close"],res.data["Time Series (Daily)"][labels_[5]]["4. close"],res.data["Time Series (Daily)"][labels_[6]]["4. close"]],
                      strokeWidth: 2,
                  }
              ]
          }
          this.setState({line: Object.assign({}, data_api)});
          this.setState({close: res.data["Time Series (Daily)"][labels_[6]]["4. close"]});
          this.setState({open: res.data["Time Series (Daily)"][labels_[6]]["1. open"]});
          this.setState({high: res.data["Time Series (Daily)"][labels_[6]]["2. high"]});
          this.setState({volume: res.data["Time Series (Daily)"][labels_[6]]["5. volume"]});
          this.setState({weekclose: Object.assign([], [Number(res.data["Time Series (Daily)"][labels_[0]]["4. close"]), Number(res.data["Time Series (Daily)"][labels_[1]]["4. close"]),Number(res.data["Time Series (Daily)"][labels_[2]]["4. close"]),Number(res.data["Time Series (Daily)"][labels_[3]]["4. close"]),Number(res.data["Time Series (Daily)"][labels_[4]]["4. close"]),Number(res.data["Time Series (Daily)"][labels_[5]]["4. close"]),Number(res.data["Time Series (Daily)"][labels_[6]]["4. close"])])})
          this.setState({weekmax: Math.max.apply(Math, this.state.weekclose)});
          this.setState({weekmin: Math.min.apply(Math, this.state.weekclose)});

          })
    }

    render() {
        return (
            <View>
                <Text style={styles_stock.titleText}>
                    {this.state.ticker}
                </Text>
                <Text style={styles_stock.titleText2}>
                    Close: {this.state.close}
                </Text>
                <Text style={styles_stock.titleText2}>
                    Open: {this.state.open}
                </Text>
                <Text style={styles_stock.titleText2}>
                </Text>
                <Text style={styles_stock.titleText2}>
                    Past Week:
                </Text>
                <LineChart
                    data={this.state.line}
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

                    Volume: {Number(this.state.volume).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                </Text>
                <Text style={styles_stock.titleText2_}>

                    7 Day Max: {this.state.weekmax}
                </Text>
                <Text style={styles_stock.titleText2_}>

                    7 Day Min: {this.state.weekmin}
                </Text>
            </View>
            );
    }
}

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