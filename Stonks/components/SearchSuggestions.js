import React from 'react';
import { Text } from 'react-native';

//function for displaying search suggestions
const SearchSuggestions = (props) => {
    const options = props.results.map(r => (
        <Text>{r.bestMatches}</Text>
    ))
    return <Text>{options}</Text>
}

export default SearchSuggestions