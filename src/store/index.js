import Vue from 'vue';
import Vuex from 'vuex';
import intern from './modules/intern';
import team from './modules/team';
import match from './modules/match';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        intern,
        team,
        match,
        auth
    }
});
