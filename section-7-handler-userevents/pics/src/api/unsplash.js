import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID v4dUgOYAeB0wZFEAavC9Bg2zGhagkfk3ZPI54FkLJ4k'
  }
});
