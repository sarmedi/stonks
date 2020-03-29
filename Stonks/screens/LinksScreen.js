import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import SearchBar from 'react-native-dynamic-search-bar';

<SearchBar
   onPressToFocus
   autoFocus={false}
   fontColor="#c6c6c6"
   iconColor="#c6c6c6"
   shadowColor="#282828"
   cancelIconColor="#c6c6c6"
   backgroundColor="#353d5e"
   placeholder="Search here"
   onChangeText={text => {
     this.filterList(text);
   }}
   onPressCancel={() => {
     this.filterList("");
   }}
   onPress={() => alert("onPress")}
 />
 

// export default class App extends React.Component {
//   state = {
//     search: '',
//   };

//   updateSearch = search => {
//     this.setState({ search });
//   };

//   render() {
//     const { search } = this.state;

//     return (
//       <SearchBar
//         style={styles.container}
//         placeholder="Type Here..."
//         onChangeText={this.updateSearch}
//         value={search}
//       />
//     );
//   }
// }


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
