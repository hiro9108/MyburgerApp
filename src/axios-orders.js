import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburgerapp-a7b2b.firebaseio.com/'
});

export default instance;