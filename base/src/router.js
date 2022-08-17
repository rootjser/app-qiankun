import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld";

const routes = [
  {
    path: "/",
    name: "home",
    component: HelloWorld,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//主应用使用的嵌套路由
router.beforeEach((to, from, next) => {
  if (!window.history.state.current) window.history.state.current = to.fullPath;
  if (!window.history.state.back) window.history.state.back = from.fullPath;
  // 手动修改history的state
  return next();
});

export default router;
