import axios from 'axios';
import { test, expect, jest, afterEach } from '@jest/globals';
import { getUser } from './task3.js';

afterEach(() => {
  jest.restoreAllMocks();
});

test('should return user for successful mocked request', async () => {
  const mockUser = {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
  };

  const getSpy = jest.spyOn(axios, 'get').mockResolvedValue({
    status: 200,
    data: mockUser,
  });

  const result = await getUser(1);

  expect(result).toEqual(mockUser);

  expect(getSpy).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/users/1',
  );
});

test('should handle failed mocked request', async () => {
  jest
    .spyOn(axios, 'get')
    .mockRejectedValue(new Error('Network error'));

  await expect(getUser(1)).rejects.toThrow(
    'Failed to fetch user',
  );
});