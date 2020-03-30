// import * as React from 'react';
// import { StyleSheet, Text, View, ActivityIndicator,
//   FlatList, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import * as WebBrowser from 'expo-web-browser';
// import { RectButton, ScrollView } from 'react-native-gesture-handler';

// import { SearchBar } from 'react-native-elements';

// export default class App extends React.Component {
//   state = {
//     search: '',
//   };

//   updateSearch = search => {
//     this.setState({ search });
//     const url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=';
//     const apikey = '&apikey=demo';
//     fetch(url+search+apikey)
//     .then(response => response.json())
//     .then((responseJson) => {
//       this.setState({
//         dataSource: responseJson.Search,
//       });
//     });
//   };
  

//   render() {
//     const { search } = this.state;
    
//     return (
//       <SearchBar
//         style={styles.container}
//         placeholder="Search Here..."
//         onChangeText={this.updateSearch}
//         value={search}
//       />
//     );
//   }
// }

import React, { Component } from 'react';
import axios from 'axios';
import SearchSuggestions from "../components/SearchSuggestions";
import { SearchBar } from 'react-native-elements';

const { API_KEY } = "demo";

class Search extends Component {

  state = {
    query: "",
    results: []
  }

  getInfo = () => {
    axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.query}&apikey=${API_KEY}`)
    .then(({ data }) => {
      this.setState({
        results: data.bestMatches
      })
    })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      }
    })
  }

  render () {
    const { search } = this.state;
    return (
        <SearchBar
          placeholder="Enter a company or industry...."
          onChangeText={this.handleInputChange.bind(this)}
          value={this.state.query}
        />
    );
  }
}

export default Search
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});*/
