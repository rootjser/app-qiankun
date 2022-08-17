import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";
import Hello from "./components/Hello";
import World from "./components/World";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/hello", component: Hello },
  { path: "/world", component: World },
];

export default routes;
