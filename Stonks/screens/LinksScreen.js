import * as React from 'react';
import { StyleSheet, Text, View, ActivityIndicator,
  FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    const url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=';
    const apikey = '&apikey=OJZ1MR03G7F21DHM';
    fetch(url+search+apikey)
    .then(response => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: responseJson.Search,
      });
    });
    
  
  };

  render() {
    const { search } = this.state;
    
    return (
      <SearchBar
        style={styles.container}
        placeholder="Type Here..."
        
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}


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
});
