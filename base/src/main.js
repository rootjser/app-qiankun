import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "vueapp1",
    entry: "//localhost:8031",
    container: "#container",
    activeRule: "/mypage1",
  },
  {
    name: "vueapp2",
    entry: "//localhost:8032",
    container: "#container",
    activeRule: "/mypage2",
  },
]);
createApp(App).use(router).mount("#app");
start();
