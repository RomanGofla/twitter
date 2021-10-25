import axios from 'axios';
import { Tweet, TweetsState } from '../../store/ducks/tweets/contracts/state';

export const TweetsApi = {
  fetchTweets() {
    return axios.get('/tweets').then(({ data }) => data);
  },
  fetchTweetData(id: string){
    return axios.get('/tweets?_id=' + id).then(({ data }) => data);
  },
};
