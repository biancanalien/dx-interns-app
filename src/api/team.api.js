import httpClient from './httpClient';

const END_POINT = '/teams';

const teamAPI = {};

teamAPI.getAll = () => httpClient.get(END_POINT);

teamAPI.save = team => httpClient.put(END_POINT, team);

teamAPI.getTeamOptions = () => httpClient.get('/teamOptions');

export default teamAPI;
