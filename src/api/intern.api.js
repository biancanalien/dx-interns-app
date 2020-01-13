import httpClient from './httpClient';

const END_POINT = '/interns';

const internAPI = {};

internAPI.getAll = () => httpClient.get(END_POINT);

internAPI.save = intern => httpClient.put(END_POINT, intern);

internAPI.getInternOptions = () => httpClient.get('/internOptions');

export default internAPI;
