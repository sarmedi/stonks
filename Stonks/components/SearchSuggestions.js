import React from 'react';
import { Text } from 'react-native';


const SearchSuggestions = (props) => {
    const options = props.results.map(r => (
        <Text>{r.bestMatches}</Text>
    ))
    return <Text>{options}</Text>
}

export default SearchSuggestions