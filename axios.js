import axios from 'axios';

const bfs = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
      },
    withCredentials: true
})

export default bfs