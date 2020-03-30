import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Suggestions = (props) => {
    const options = props.results.map(r => (
        <Text>
            {r.name}
        </Text>
    ))
    return <Text>{options}</Text>
}

export default Suggestions