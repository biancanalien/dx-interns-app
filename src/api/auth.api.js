import httpClient from './httpClient';

const END_POINT = '/auth';

const getProfileInfo = () => httpClient.get(`${END_POINT}/me`);

export default getProfileInfo;
