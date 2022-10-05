import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

console.log('-------------------');
console.log(import.meta.env);
console.log('-------------------');

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_PATH),
  routes: [
    {
      path: "/expenses/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/expenses/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
