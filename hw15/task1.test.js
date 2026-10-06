import { test, expect } from '@jest/globals';
import { requestInvalidUrl } from './task1.js';

test('should correctly handle request error', async () => {
  const result = await requestInvalidUrl();

  expect(result).toBe('Request failed with status 404');
});