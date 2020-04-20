import * as React from 'react';
import { Text } from 'react-native';

//function for styling text
export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
