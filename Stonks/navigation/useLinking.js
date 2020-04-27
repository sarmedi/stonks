import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';
//Function to finish linking and set path values
export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Search: 'search',
          Recommended: 'recommended',
          Tutorial: 'tutorial',
        },
      },
    },
  });
}
