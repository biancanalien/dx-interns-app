import matchAPI from '@/api/match.api.js';

const state = {
    superMatchList: [],
    otherMatchList: [],
    unknownMatchList: []
};

const mutations = {
    mapMatchLists(state, payload) {
        payload.forEach(m => {
            if (m.weight == 0) {
                state.superMatchList.push(m);
            } else if (m.weight >= 5) {
                state.unknownMatchList.push(m);
            } else {
                state.otherMatchList.push(m);
            }
        });
    },
    clearMatchLists(state) {
        state.superMatchList = [];
        state.otherMatchList = [];
        state.unknownMatchList = [];
    }
};

const actions = {
    async getAll({ commit }) {
        try {
            let response = await matchAPI.getAll();
            commit('clearMatchLists');
            commit('mapMatchLists', response.data);
        } catch (error) {
            commit('clearMatchLists');
        }
    }
};

export default {
    namespaced: true,
    actions,
    mutations,
    state
};
