import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Linking} from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
// Expert-level stocks
const DATA = [
  {
    id: '1',
    title: 'NYSE:TEVA',
    ticker: 'TEVA'
  },
  {
    id: '2',
    title: 'NASDAQ:SGMS',
    ticker: 'SGMS'
  },
  {
    id: '3',
    title: 'NYSE:CHK',
    ticker: 'CHK'
  },
  {
    id: '4',
    title: 'NYSE:SFL',
    ticker: 'SFL'
  },
  {
    id: '5',
    title: 'NYSE:CHGG',
    ticker: "CHGG"
  },
  {
    id: '6',
    title: 'NYSE:SUP',
    ticker: 'SUP'
  },
];
//function to display a view for each ticker
function Item({ title, ticker }) {
  const navigation = useNavigation();
  return (
    /* Display the chart icon and the title of the stock */
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Stock Page', {ticker: ticker})}>
        <View><TabBarIcon style={{tintColor: '#fff'}} name="chart-line"/></View>
        <View><Text style={styles.title}>{title}</Text></View>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Create a list to show all 6 stocks */}
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    backgroundColor: '#d97979',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  }
});
