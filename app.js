import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login.vue';
import UserReport from './components/UserReport.vue';
import TechnicianKanban from './components/TechnicianKanban.vue';

Vue.use(Router);

const router = new Router({
    routes: [
        { path: '/', component: Login },
        { path: '/report', component: UserReport },
        { path: '/kanban', component: TechnicianKanban }
    ]
});

new Vue({
    el: '#app',
    router
});
