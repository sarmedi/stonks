import React, {Component} from 'react';
import { StyleSheet, Text, View, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView, FlatList } from 'react-native-gesture-handler';
import { MonoText } from '../../components/StyledText';


export default function AdvancedRecommendedScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <MonoText>Add Advanced List here</MonoText>
            </ScrollView>
        </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 0,
  }
});