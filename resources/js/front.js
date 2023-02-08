require('bootstrap');

window.axios = require('axios');

// window.Vue = require('vue');
import Vue from 'vue';
import App from './App.vue';

new Vue({
    el: '#root',
    render: h => h(App),
})
