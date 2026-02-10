import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-training-8cun.onrender.com/api/users',
    headers: {'Content-Type' : 'application/json'}
});

export default api;
