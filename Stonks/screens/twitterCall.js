/*

What to do for twitter API call: 
1) install npm package twitter-proxy @ https://www.npmjs.com/package/twitter-proxy
2) run "twitter-proxy twitter-config.json" in a separate terminal
<---- Note: the twitter-config.json contains the keys from the developer account I made ---->
3) Refer to this repo for help https://github.com/nairobijs/react-native-tweets
4) Hopefully make the API call using the code below? I think it goes in the stockScreen.js file but I
    didn't want to mess with it so I wrote code here.
    -- Also, at this point if you go into your browser and make a query (http://localhost:7890/1.1/search/tweets.json?q=MSFT)
       for example, then you can download the json results and see the format.
    -- See exampleTwitterAPICallResponse.json too!
5) Add a twitterResults array to the state in stockScreen (or wherever this query will occur)
6) The tweet attributes I saved are time, id, user screen name, user full name, text, source, verified, retweet count, favorite count
(this is basically what all tweets show)
7) Then the data stored can be formatted in the same style as a real tweet

*/

import _ from 'lodash';
import axios from 'axios';
const twitterAPI = 'http://localhost:7890/1.1';


componentDidMount(ticker) {
    // Use this URL to request data from our alpha vantage database
    axios.get(`${twitterAPI}/search/tweets.json?q=${ticker}`)
    .then(res => {
      let tweets = _.flattenDeep( Array.from(res.data['statuses']).map((tweet) => 
        [{timePosted: tweet['created_at'], id: tweet['id'], text: tweet['text'], 
        userName: tweet['user']['name'], userScreenName: tweet['user']['screen_name'], 
        verified: tweet['user']['verified'], retweetCount: tweet['retweent_count'], 
        favoriteCount: tweet['favorite_count']}]) );
      // Update the state of results array
      this.setState({ twitterResults: tweets });
    })
    .catch(error => console.log(error))
}


