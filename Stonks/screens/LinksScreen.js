import React, { Component } from 'react';
import axios from 'axios';
import { Image, StyleSheet, Text, View } from 'react-native';
import SearchSuggestions from "../components/SearchSuggestions";
import { SearchBar } from 'react-native-elements';

// Easily change the API key for testing
const { API_KEY } = "demo";

class Search extends Component {

    // Our current state is defined as a query and results array
    state = {
      query: "",
      results: [],
    }

  componentDidMount(search) {
    console.log("Component mount search:", search);
    // Use this URL to request data from our alpha vantage database
    axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${API_KEY}`)
    .then(res => {
      // Update the state of results array
      this.setState({ results: res.data });
      console.log("state results:", this.state.results);
    }) 
  }

  // Function to update the state with the current search
  handleInputChange = search => {
    console.log("Search", search);
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
        <View style={styles.imageBox}>
          <Image source={require('../assets/images/search-money-icon.png')} style={styles.actualImage} />
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
    width: 250, 
    height: 250,
  },
});
