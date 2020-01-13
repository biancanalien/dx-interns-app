import httpClient from './httpClient';

const END_POINT = '/match';

const matchAPI = {};

matchAPI.getAll = () => httpClient.get(END_POINT);

export default matchAPI;
