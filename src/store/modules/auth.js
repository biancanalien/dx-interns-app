import Vue from 'vue';
import router from '@/router';
import { getProfileInfo } from '@/api/auth.api';

const state = {
    currentUser: {
        email: '',
        username: '',
        name: '',
        picture: '',
        token: '',
        isAuthenticated: false
    }
};

const mutations = {
    setUser(state, user, token) {
        state.currentUser = user;
        state.currentUser.isAuthenticated = true;
        state.currentUser.token = token;
    },
    setNotAuthenticate(state) {
        state.currentUser = {};
        state.currentUser.isAuthenticated = false;
    }
};
const actions = {
    authenticateUser({ dispatch }, path) {
        Vue.googleAuth().directAccess();
        Vue.googleAuth().signIn(googleUser => {
            localStorage.setItem('token', googleUser.Zi.id_token);
            dispatch('validateUser', path);
        }, dispatch('onSignInError'));
    },
    async validateUser({ commit, dispatch }, path) {
        try {
            const response = await getProfileInfo();
            commit('setUser', response.data, '');
            router.push(path);
        } catch (e) {
            dispatch('onSignInError');
        }
    },
    onSignInError({ commit }) {
        commit('setNotAuthenticate');
    }
};

const getters = {
    isAuthenticated(state) {
        return (
            state.currentUser !== null &&
            state.currentUser !== undefined &&
            state.currentUser !== {} &&
            state.currentUser.isAuthenticated
        );
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
