import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions, } from 'react-native';
import styled from 'styled-components';
//function to display newsFeed



var styles_home = StyleSheet.create({
    newsCard: {
        backgroundColor: 'white',
        height: 100,
        width: 350,
        borderRadius: 14,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    
        elevation: 12,
      },
      
})
export default NewsFeed