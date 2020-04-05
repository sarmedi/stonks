import React, { Component } from 'react';
import axios from 'axios';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import _ from 'lodash';

// Easily change the API key for testing
const { API_KEY } = "demo";
// Our API Key:
// const { API_KEY } = "OJZ1MR03G7F21DHM";

class Search extends Component {

  // constructor() {
  //   super();
    // Our current state is defined as a query and results array
    state = {
      query: "",
      results: [],
    }
  // }
  
  componentDidMount(search) {
    // Use this URL to request data from our alpha vantage database
    axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${API_KEY}`)
    .then(res => {
      let stocks = _.flattenDeep( Array.from(res.data['bestMatches']).map((stock) => [{symbol: stock['1. symbol'], name: stock['2. name'], type: stock['3. type'], region: stock['4. region'], matchScore: stock['9. matchScore']}]) );
      // Update the state of results array
      this.setState({ results: stocks });
    })
    .catch(error => console.log(error))
  }

  // Function to update the state with the current search
  handleInputChange = search => {
    this.setState({
      query: search
    }, () => {
        // Call the function to execute GET Request
        this.componentDidMount(search);
    })
  }

  render () {
    const { search } = this.state;
    return (
      <View>
        <SearchBar
          placeholder="Enter a company or industry...."

          /* This executes whenever the text changes in
            the search bar, ends with full query */
          onChangeText={this.handleInputChange}

          /* This is what the search bar shows on the app
            when typing */
          value={this.state.query}
        />
        {/* Show icon on search homepage */}
        {/* <View style={styles.imageBox}>
          <Image source={require('../assets/images/search-money-icon.png')} style={styles.actualImage} />
        </View> */}
        <View style={styles.resultList}> 
          <FlatList 
            data={this.state.results}
            renderItem={({ item }) => 
              <View style={styles.overallList}>
                <View><Text style={styles.searchSymbol}>{item.symbol}</Text></View>
                <View><Text style={styles.searchName}>{item.name}</Text></View>
              </View>
              }
            keyExtractor={item => item.symbol}
          />
        </View>
      </View>
    );
  }
}

export default Search

// Style the main image on the page
const styles = StyleSheet.create({
  imageBox: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '88%',
  },
  actualImage: {
    width: 200, 
    height: 200,
  },
  resultList: {
    // backgroundColor: '#2B2F33',
    backgroundColor: '#fff',
  },
  overallList: {
    borderBottomWidth:1,
    borderBottomColor: '#cfcdcc',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  searchSymbol: {
    fontSize: 22,
    color: '#000',
    paddingTop: 6,
    paddingBottom: 6,
    paddingStart: 6,
    fontWeight: 'bold'
  },
  searchName: {
    fontSize: 18,
    color: '#000',
    paddingTop: 6,
    paddingBottom: 6,
    paddingEnd: 6
  },
});
