import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import About from "@/views/AboutPage.vue";
import NotFound from "@/views/NotFoundPage.vue";
import Welcomepage from "@/views/WelcomePages.vue";
import ListTest from "@/views/ListTestPage.vue";
import Login from "@/views/LoginPage.vue";
import TestPage from "@/views/TestPage.vue";
import ProfilePage from "@/views/ProfilePage.vue"
import Registration from"@/views/RegistrationPage.vue";
const routes = [
  {
    path :"/",
    name: "Welcompage",
    component: Welcomepage,
  },
  {
    path :"/Profilepage",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path :"/login",
    name: "LoginPage",
    component: Login,
  },
  {
    path :"/test",
    name: "TestPage",
    component: TestPage,
  },
  {
    path :"/registration",
    name: "RegistrationPage",
    component: Registration,
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