import axios from 'axios';

export async function getPostsWithHeadersAndParams() {
  return axios.get('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'X-Custom-Header': 'hw15',
    },
    params: {
      userId: 1,
    },
  });
}