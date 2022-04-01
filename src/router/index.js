import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import About from "@/views/AboutPage.vue";
import NotFound from "@/views/NotFoundPage.vue";
import Welcomepage from "@/views/WelcomePages.vue";
import ListTest from "@/views/ListTestPage.vue";

const routes = [
  {
    path :"/welcome",
    name: "Welcompage",
    component: Welcomepage,
  },
  {
    path: "/",
    name: "HomePage",
    component: Home,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: About,
  },
  {
    path: "/list-test",
    name: "ListTest",
    component: ListTest,
  },

    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
   
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;