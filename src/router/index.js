import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import About from "@/views/AboutPage.vue";
import NotFound from "@/views/NotFoundPage.vue";
import Welcomepage from "@/views/WelcomePages.vue";
import ListTest from "@/views/ListTestPage.vue";
import Login from "@/views/LoginPage.vue";
import TestPage from "@/views/TestPage.vue";
import EditTestPage from "@/views/EditTestPage.vue";
import PlayTestPage from "@/views/PlayTestPage.vue";


import Registration from"@/views/RegistrationPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
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
    path :"/play-test/:id",
    name: "PlayTestPage",
    component: PlayTestPage,
  },
  {
  
    path :"/test",
    name: "TestPage",
    component: TestPage,
  },
  {
    path :"/edit-test",
    name: "EditTestPage",
    component: EditTestPage,
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
    path: "/listtest",
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