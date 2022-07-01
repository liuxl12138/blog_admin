import { createApp } from "vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.use(ElementPlus, {
  locale: zhCn,
});
