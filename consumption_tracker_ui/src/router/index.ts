import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/Home.vue";
import About from "../views/about/About.vue";
import Capture from "../views/capture/Capture.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about/",
    name: "About",
    component: About,
  },
  {
    path: "/capture/",
    name: "Capture",
    component: Capture,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
