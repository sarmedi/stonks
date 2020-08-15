import * as React from 'react';
import { Image, StyleSheet, SafeAreaView, Text, View, Linking, LayoutAnimation, Platform, UIManager, TouchableOpacity, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';
const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;
//Function for the TutorialScreen component
export default function TutorialScreen() {
    return (
      //Contains a scroll view and images and text, along with more reading at the bottom complete with links.
      <ScrollView style={styles.scrollWheel}
      horizontal={true}
      contentContainerStyle={{ width: `${100 * 2}%` }}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={200}
      decelerationRate="fast"
      pagingEnabled>
              <Text style= {{position: "absolute",justifyContent: 'center', paddingLeft: width/3, marginTop: height/20, fontSize: 40}} >Tutorial</Text>
              <View style={styles.infoCard}>
                  <Text style={styles.titleText}>
                    {"So, what is the stock market?"}
                  </Text>
                  <Image
                      source={
                        __DEV__
                          ? require('../assets/images/tutorial1.png')
                          : require('../assets/images/tutorial1.png')
                      }
                      style={styles.welcomeImage}
                    />
                  <Text style= {{justifyContent: 'center', textAlign: 'center', top: 10}} >
                    {"Stock markets are where buyers and sellers of stocks come together to trade shares in companies."}
                  </Text>
                  <Text/>
                  <Text style={styles.titleText2}>
              {"Understanding the stock market"}
            </Text>

            <Text>
              {"\n"}
              {"Stocks are bought and sold on stock markets, which bring together buyers and sellers of publicly traded company shares. Stock markets operate kind of like auctions, where potential buyers name their highest price (a.k.a. “the bid”) and potential sellers name their lowest price (“the ask”). The actual price a trade is executed at is somewhere between the bid and the ask. Trades can be placed by stockbrokers, usually on behalf of portfolio managers or individual investors like you. The stock market in the US is made up of 13 exchanges, the best known are the New York Stock Exchange and Nasdaq."}
              {"\n"}
            </Text>

            <Text style={styles.codeHighlightContainer}>
              {"Snapchat-owner Snap Inc. listed its shares publicly on the stock market with its 2016 IPO. Its shares now trade on the New York Stock Exchange with the ticker symbol “SNAP”, and they’re available to buy and sell on the stock market by everyday investors like you."}
            </Text>
              </View>
              <View style={styles.infoCard}>
              
              
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
            <Image
                source={
                  __DEV__
                    ? require('../assets/images/tutorial2.png')
                    : require('../assets/images/tutorial2.png')
                }
                style={styles.welcomeImage}
              />
              <Text style={styles.titleText2}>
              {"\n"}
              {"Want to learn more?"}
              {"\n"}
            </Text>
            <Text style={{
                textDecorationLine: 'underline',
              }}onPress={ ()=> Linking.openURL('https://www.marketreview.com/function-of-stock-markets/') }>
              {"Primary functions of the stock market"}
              {"\n"}
              {"\n"}
              </Text>
              <Text style={{
                textDecorationLine: 'underline',
              }}onPress={ ()=> Linking.openURL('https://www.nerdwallet.com/blog/investing/what-is-the-stock-market/') }>
              {"How does the stock market work?"}
              {"\n"}
              {"\n"}
              </Text>
              <Text style={{
                textDecorationLine: 'underline',
              }}onPress={ ()=> Linking.openURL('https://www.thestreet.com/static/25-rules.html') }>
              {"What are some rules of the stock market?"}
              {"\n"}
              {"\n"}
              </Text>
              <Text style={{
                textDecorationLine: 'underline',
              }}onPress={ ()=> Linking.openURL('https://www.thebalance.com/who-s-watching-your-back-in-stock-market-3141308') }>
                {"Who regulates stock markets?"}
              </Text>
              </View>


        </ScrollView>
    );
  }

const styles = StyleSheet.create({
  carouselContainer:{
    paddingTop: 100,
    paddingBottom: 0,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrollWheel:{
    width: 375,
  },
   welcomeImage: {
    width: width*0.7,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: 0,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop:10,
    color:"#1A741D",
  },
  titleText2: {
    fontSize: 19,
    fontWeight: "bold"
  },
  container: {
    padding: 25,
    flex: 1,
    color: '#ffffff',
  },
  contentContainer: {
    paddingTop: 15,
  },
  
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: 'white',
    height: height*0.66,
    width: width*0.8,
    borderRadius: 14,
    marginTop: height/10,
    marginBottom: 20,
    marginLeft: width/11,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },

});

              
              