import * as React from 'react';
import { Image, StyleSheet, SafeAreaView, Text, View, Linking, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';

export default function TutorialScreen() {
    return (
        <ScrollView style={styles.container}>
          
            <Text style={styles.titleText}>
              {"So, what is the stock market?"}
              {"\n"}
            </Text>

            <Text style={styles.codeHighlightContainer}>
              {"Stock markets are where buyers and sellers of stocks come together to trade shares in companies."}
              {"\n"}
              {"\n"}
            </Text>

            <View style={styles.welcomeContainer}>
              <Image
                source={
                  __DEV__
                    ? require('../assets/images/app_icon.png')
                    : require('../assets/images/app_icon.png')
                }
                style={styles.welcomeImage}
              />
            </View>

            <Text numberOfLines={5}>{"some more text"}</Text>
          
        </ScrollView>
    );
  }

const styles = StyleSheet.create({
  titleText: {
    fontSize: 21,
    fontWeight: "bold"
  },
  container: {
    padding: 25,
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
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
