import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const instance = axios.create({
    baseURL : 'https://warm-refuge-24363.herokuapp.com/'
})

export default instance;