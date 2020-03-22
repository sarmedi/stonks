import * as React from 'react';
import { StyleSheet, Text, View, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView, FlatList } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';

export default function AdvancedRecommendedScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.menu}>
                  <FlatList
                  horizontal = {true}
                  data = {[
                    {key: 'Beginner'},
                    {key: 'Intermediate'},
                    {key: 'Advanced'},
                  ]}
                  renderItem={({item}) => <Text style={styles.item} onPress={() => Linking.openURL('http://google.com')}>{item.key}</Text>}
                  />
                </View>
                <MonoText>Add Advanced List here</MonoText>
            </ScrollView>
        </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#1A741D',
    backgroundColor: '#1A741D',
  },
  contentContainer: {
    paddingTop: 0,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#1A741D',
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
  menu: {
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#003D02',
    color: '#fff',
    padding: 10,
    fontSize: 18,
    height: 45,
    width: 125,
    textAlign: 'center',
  }
});
