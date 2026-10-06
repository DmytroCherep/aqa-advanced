import axios from 'axios';
import { test, expect, jest, afterEach } from '@jest/globals';
import { getPostsWithHeadersAndParams } from './task2.js';

afterEach(() => {
  jest.restoreAllMocks();
});

test('should include custom headers and params in request', async () => {
  const getSpy = jest.spyOn(axios, 'get').mockResolvedValue({
    status: 200,
    data: [],
  });

  await getPostsWithHeadersAndParams();

  expect(getSpy).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/posts',
    {
      headers: {
        'X-Custom-Header': 'hw15',
      },
      params: {
        userId: 1,
      },
    },
  );
});