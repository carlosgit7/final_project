import { createRouter, createWebHistory } from "vue-router";
import userAuth from "./composables/userAuth";
import Index from './pages/index.vue';
import Timeline from './pages/timeline.vue';
import Profile from './pages/profile.vue';
import Post from './pages/post.vue';
import About from './pages/about.vue';
import Logout from './pages/logout.vue';
import NotFound from './pages/404.vue';


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
    },
    {
        path: "/post",
        name: "Post",
        component: Post,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        
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