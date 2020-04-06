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
            </Text>

            <View style={styles.welcomeContainer}>
              <Image
                source={
                  __DEV__
                    ? require('../assets/images/tutorial1.png')
                    : require('../assets/images/tutorial1.png')
                }
                style={styles.welcomeImage}
              />
            </View>

            <Text style={styles.titleText2}>
              {"Understanding the stock market"}
            </Text>

            <Text>
              {"\n"}
              {"Stocks are bought and sold on stock markets, which bring together buyers and sellers of publicly traded company shares. Stock markets operate kind of like auctions, where potential buyers name their highest price (“the bid”) and potential sellers name their lowest price (“the ask”). The actual price a trade is executed at is somewhere between the bid and the ask. Trades can be placed by stockbrokers, usually on behalf of portfolio managers or individual investors like you. The stock market in the US is made up of 13 exchanges, the best known are the New York Stock Exchange and Nasdaq."}
              {"\n"}
            </Text>

            <Text style={styles.codeHighlightContainer}>
              {"Snapchat-owner Snap Inc. listed its shares publicly on the stock market with its 2016 IPO. Its shares now trade on the New York Stock Exchange with the ticker symbol “SNAP,” and they’re available to buy and sell on the stock market by everyday investors like you."}
            </Text>

            <Text style={styles.titleText2}>
              {"\n"}
              {"Takeaway"}
              {"\n"}
            </Text>

            <Text style={styles.codeHighlightContainer}>
              {"The world’s stock markets are complex, but are all based upon one simple concept..."} 
            </Text>

             <Text>
              {"\n"}
              {"Connecting stock buyers with stock sellers to trade under an agreed upon set of rules. This is the key role of every stock market, from New York to Hong Kong."}
              {"\n"}
            </Text>

            <View style={styles.welcomeContainer}>
              <Image
                source={
                  __DEV__
                    ? require('../assets/images/tutorial2.png')
                    : require('../assets/images/tutorial2.png')
                }
                style={styles.welcomeImage}
              />
            </View>

            <Text> {"\n"} </Text>

            
            
            <Text> {"\n"} </Text>
            
            <Text> {"\n"} </Text>


        </ScrollView>
    );
  }

const styles = StyleSheet.create({
   welcomeImage: {
    width: 500,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  titleText: {
    fontSize: 21,
    fontWeight: "bold"
  },
  titleText2: {
    fontSize: 19,
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
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
