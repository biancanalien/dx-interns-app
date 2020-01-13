import internAPI from '@/api/intern.api.js';
import teamAPI from '@/api/team.api.js';

const state = {
    all: [],
    newIntern: {},
    teamOptions: [],
    selectedTeams: []
};

const getters = {};

const mutations = {
    setInterns(state, payload) {
        state.all = payload;
    },
    setTeamOptions(state, payload) {
        state.teamOptions = payload;
    },
    setNewIntern(state, payload) {
        state.newIntern = payload;
    },
    setSelectedTeams(state, payload) {
        state.selectedTeams = payload;
    }
};

const actions = {
    async getAllInterns({ commit }) {
        try {
            let response = await internAPI.getAll();
            commit('setInterns', response.data);
        } catch (error) {
            commit('setInterns', []);
        }
    },
    async getTeamOptions({ commit }) {
        try {
            let response = await teamAPI.getTeamOptions();
            commit('setTeamOptions', response.data);
        } catch (error) {
            commit('setTeamOptions', []);
        }
    },
    async saveIntern({ commit, dispatch }, newIntern) {
        try {
            let response = await internAPI.save(newIntern);
            commit('setNewIntern', response.data);
            dispatch('getAllInterns');
        } catch (error) {
            commit('setNewIntern', null);
        }
    },
    updateSelectedTeams({ commit }, teams) {
        commit('setSelectedTeams', teams);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
