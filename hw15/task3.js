import axios from 'axios';

export async function getUser(userId) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );

    return response.data;
  } catch {
    throw new Error('Failed to fetch user');
  }
}