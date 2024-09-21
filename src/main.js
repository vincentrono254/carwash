import { createApp } from "vue";
import App from "./App.vue";

import ContactUs from "./components/ContactUs.vue";
import HomeComponent from "./components/HomeComponent.vue";
import ServicesComponent from "./components/ServicesComponent.vue";
import AboutUs from "./components/AboutUs.vue";

import { createRouter, createWebHistory } from "vue-router";

// Define the routes = component
const routes = [
  { path: "/home", component: HomeComponent },
  { path: "/services", component: ServicesComponent },
  { path: "/about", component: AboutUs },
  { path: "/contact", component: ContactUs },
  { path: "/", redirect: "/home" }, // Redirect root to home
];

// Instance of the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create an instance of the app
const app = createApp(App);
app.use(router);
app.mount("#app");
