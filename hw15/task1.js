import axios from 'axios';

export async function requestInvalidUrl() {
  try {
    await axios.get(
      'https://jsonplaceholder.typicode.com/invalid-endpoint',
    );

    return 'Request succeeded';
  } catch (error) {
    if (error.response) {
      return `Request failed with status ${error.response.status}`;
    }

    return `Request failed: ${error.message}`;
  }
}