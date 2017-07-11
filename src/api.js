import Promise from 'es6-promise'
import fetch from 'isomorphic-fetch';
import request from 'superagent';

const baseUrl = 'https://localhost:3002';

Promise.polyfill();

const api = {
  question: {
    async save(q,cb){
      request.post(`${baseUrl}/question`)
        .set('Content-Type', 'application/json')
        .set('crossDomain', 'true')
        .send(q)
        .end(cb);
    }
  },
  answer: {
    async save(q,cb){
      request.post(`${baseUrl}/answer`)
        .set('Content-Type', 'application/json')
        .set('crossDomain', 'true')
        .send(q)
        .end(cb);
    }
  },
  posts: {
    async getList(page = 1){
      const response = await fetch(`${baseUrl}/posts?_page=${page}`);
      const data = await response.json();
      return data;
    },
    async getSingle(id = 1){
      const response = await fetch(`${baseUrl}/posts/${id}`);
      const data = await response.json();
      return data;
    },
    async getComments(id = 1){
      const response = await fetch(`${baseUrl}/posts/${id}/comments`);
      const data = await response.json();
      return data;
    },
  },
  users: {
    async getSingle(id = 1) {
      const response = await fetch(`${baseUrl}/users/${id}`);
      const data = await response.json();
      return data;
    },
    async getPosts(id = 1){
      const response = await fetch(`${baseUrl}/posts/?userId=${id}`);
      const data = await response.json();
      return data;
    }
  },
};

export default api;