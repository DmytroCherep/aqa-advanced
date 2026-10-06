import test from 'node:test';
import assert from 'node:assert/strict';
import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

test('GET /posts/1 should return correct post', async () => {
  const response = await axios.get(`${baseUrl}/posts/1`);

  assert.equal(response.status, 200);
  assert.equal(response.data.id, 1);
  assert.equal(response.data.userId, 1);
  assert.equal(typeof response.data.title, 'string');
  assert.equal(typeof response.data.body, 'string');
});

test('GET /users/1 should return correct user', async () => {
  const response = await axios.get(`${baseUrl}/users/1`);

  assert.equal(response.status, 200);
  assert.equal(response.data.id, 1);
  assert.equal(response.data.name, 'Leanne Graham');
  assert.equal(typeof response.data.email, 'string');
});

test('GET /todos/1 should return correct todo', async () => {
  const response = await axios.get(`${baseUrl}/todos/1`);

  assert.equal(response.status, 200);
  assert.equal(response.data.id, 1);
  assert.equal(response.data.userId, 1);
  assert.equal(response.data.completed, false);
  assert.equal(typeof response.data.title, 'string');
});

test('POST /posts should create a new post', async () => {
  const newPost = {
    title: 'Test post',
    body: 'Test post body',
    userId: 1,
  };

  const response = await axios.post(`${baseUrl}/posts`, newPost);

  assert.equal(response.status, 201);
  assert.equal(response.data.id, 101);
  assert.equal(response.data.title, newPost.title);
  assert.equal(response.data.body, newPost.body);
  assert.equal(response.data.userId, newPost.userId);
});

test('POST /posts should return correct data for another post', async () => {
  const newPost = {
    title: 'Second test post',
    body: 'Second test post body',
    userId: 2,
  };

  const response = await axios.post(`${baseUrl}/posts`, newPost);

  assert.equal(response.status, 201);
  assert.equal(response.data.id, 101);
  assert.equal(response.data.title, newPost.title);
  assert.equal(response.data.body, newPost.body);
  assert.equal(response.data.userId, newPost.userId);
});