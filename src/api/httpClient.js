import axios from 'axios';

const httpClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-type': 'application/json'
    }
});

const getAuthToken = () => localStorage.getItem('token');

const authInterceptor = config => {
    config.headers['Authorization'] = getAuthToken();
    console.log(config);
    return config;
};

httpClient.interceptors.request.use(authInterceptor);

export default httpClient;
