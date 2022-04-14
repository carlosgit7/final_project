import { createRouter, createWebHistory } from "vue-router";
import userAuth from "./composables/userAuth";

import Index from './pages/index.vue';
import Timeline from './pages/timeline.vue';
import Profile from './pages/profile.vue';
import More from './pages/more.vue';
import About from './pages/about.vue';
import Logout from './pages/logout.vue';
import NotFound from './pages/404.vue';
import Advice from './pages/advice.vue';
import BreakingBad from './pages/breakingBadQuotes.vue' 

const {isAuthenticated} = userAuth();

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/timeline",
        name: "timeline",
        component: Timeline,
        beforeEnter: (to, from, next) => {
            if(!isAuthenticated.value){
                next("/");
            }
            next();
        }
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        beforeEnter: (to, from, next) => {
            if(!isAuthenticated.value){
                next("/");
            }
            next();
        }        
    },
    {
        path: "/more",
        name: "More",
        component: More,
        beforeEnter: (to, from, next) => {
            if(!isAuthenticated.value){
                next("/");
            }
            next();
        }
    },
    {
        path: "/advice",
        name: "Advice",
        component: Advice,
        beforeEnter: (to, from, next) => {
            if(!isAuthenticated.value){
                next("/");
            }
            next();
        }
    },
    {
        path: "/breakingBadQuotes",
        name: "BreakingBad",
        component: BreakingBad,
        beforeEnter: (to, from, next) => {
            if(!isAuthenticated.value){
                next("/");
            }
            next();
        }
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/logout",
        name: "Logout",
        component: Logout,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;