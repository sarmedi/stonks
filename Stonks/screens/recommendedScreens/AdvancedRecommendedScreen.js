import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Linking} from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';
import { FlatList } from 'react-native-gesture-handler';

// Expert-level stocks
const DATA = [
  {
    id: '1',
    title: 'NYSE:TEVA',
  },
  {
    id: '2',
    title: 'NASDAQ:SGMS',
  },
  {
    id: '3',
    title: 'NYSE:CHK',
  },
  {
    id: '4',
    title: 'NYSE:SFL',
  },
  {
    id: '5',
    title: 'NYSE:CHGG',
  },
  {
    id: '6',
    title: 'NYSE:SUP',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      {/* Display the chart icon and the title of the stock */}
      <TabBarIcon name="chart-line"/>
      <Text style={styles.title}>{title}</Text>
    </View>
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
  },
  title: {
    fontSize: 20,
    color: '#fff',
  }
});
