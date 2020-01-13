import teamAPI from '@/api/team.api.js';
import internAPI from '@/api/intern.api.js';

const state = {
    all: [],
    newTeam: {},
    internOptions: [],
    selectedInterns: []
};

const getters = {};

const mutations = {
    setTeams(state, payload) {
        state.all = payload;
    },
    setInternOptions(state, payload) {
        state.internOptions = payload;
    },
    setNewTeam(state, payload) {
        state.newTeam = payload;
    },
    setSelectedInterns(state, payload) {
        state.selectedInterns = payload;
    }
};

const actions = {
    async getAllTeams({ commit }) {
        try {
            let response = await teamAPI.getAll();
            commit('setTeams', response.data);
        } catch (error) {
            commit('setTeams', []);
        }
    },
    async getInternOptions({ commit }) {
        try {
            let response = await internAPI.getInternOptions();
            commit('setInternOptions', response.data);
        } catch (error) {
            commit('setInternOptions', []);
        }
    },
    async saveTeam({ commit, dispatch }, newTeam) {
        try {
            let response = await teamAPI.save(newTeam);
            commit('setNewTeam', response.data);
            dispatch('getAllTeams');
        } catch (error) {
            commit('setNewTeam', null);
        }
    },
    updateSelectedInterns({ commit }, teams) {
        commit('setSelectedInterns', teams);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
