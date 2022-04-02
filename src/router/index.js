import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import About from "@/views/AboutPage.vue";
import NotFound from "@/views/NotFoundPage.vue";
import Welcomepage from "@/views/WelcomePages.vue";
import ListTest from "@/views/ListTestPage.vue";
import Login from "@/views/LoginPage.vue";
import TestPage from "@/views/TestPage.vue";

import Registration from"@/views/RegistrationPage.vue";
const routes = [
  {
    path :"/welcome",
    name: "Welcompage",
    component: Welcomepage,
  },

  {
    path :"/login",
    name: "LoginPage",
    component: Login,
  },
  {
<<<<<<< HEAD
    path :"/test",
    name: "TestPage",
    component: TestPage,
  },
=======
    path :"/registration",
    name: "RegistrationPage",
    component: Registration,
  },

>>>>>>> ccad7f99ad7463f1c5c3561d17c7700a5370857d
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