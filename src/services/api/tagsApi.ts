import axios from 'axios';
import { TagsState } from '../../store/ducks/tags/contracts/state';

export const TagsApi = {
  fetchTags(): any {
    return axios.get('/tags').then(({ data }) => data);
  },
};


