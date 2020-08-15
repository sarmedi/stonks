import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Linking, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
// Beginner-level stocks
const DATA = [
  {
    id: '1',
    title: 'NYSE:HRL',
    ticker: 'HRL'
  },
  {
    id: '2',
    title: 'NYSE:EPD',
    ticker:'EPD'
  },
  {
    id: '3',
    title: 'NYSE:VER',
    ticker: 'VER'
  },
  {
    id: '4',
    title: 'NYSE:T',
    ticker: 'T'
  },
  {
    id: '5',
    title: 'NASDAQ:INTC',
    ticker: 'INTC'
  },
  {
    id: '6',
    title: 'NASDAQ:AAPL',
    ticker: 'AAPL'
  },
];
//function to display ticker for each stock
function Item({ title, ticker }) {
  const navigation = useNavigation();
  return (
    /* Display the chart icon and the title of the stock */
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Stock Page', {ticker: ticker})}>
        <View><TabBarIcon name="chart-line"/></View>
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
        renderItem={({ item }) => <Item title={item.title} ticker={item.ticker} />}
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
    backgroundColor: '#ffffff',
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
