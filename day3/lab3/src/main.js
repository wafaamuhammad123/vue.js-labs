import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory,createRouter } from 'vue-router';
import HomeApp from './components/HomeApp.vue';
import UserDetails from './components/UserDetails.vue';
import UserCreate from './components/UserCreate.vue';
import ErrorPage from './components/ErrorPage.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const routes = [
    {
        path:'/',component:HomeApp,alias:'/users',
    },
    {
        path:'/users/:id/show',component:UserDetails
    },
    {
        path:'/users/:id/edit',component:UserCreate
    },
    {
        path:'/users/create',component:UserCreate
    },
    {
        path:'/:NotFound(.*)*',component:ErrorPage,meta:{hideNavbar:true}
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

