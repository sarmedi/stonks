import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Suggestions = (props) => {
    const options = props.results.map(r => (
        <li key={r.id}>
            {r.name}
        </li>
    ))
    return <Text>{options}</Text>
}

export default Suggestions