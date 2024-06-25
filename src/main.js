import { createApp } from "vue";
import App from "./App.vue";
import "../src/assets/index.css";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
import router from "./router/index.js";

createApp(App).use(router).use(ToastPlugin).mount("#app");
