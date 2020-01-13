import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import GoogleAuth from 'vue-google-auth';
import VueResource from 'vue-resource';

Vue.use(GoogleAuth, { client_id: process.env.VUE_APP_GG_CLIENT_ID });
Vue.googleAuth().load();

Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
