import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/Home.vue";
import Settings from "../views/settings/Settings.vue";
import Capture from "../views/capture/Capture.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/settings/",
    name: "Settings",
    component: Settings,
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
