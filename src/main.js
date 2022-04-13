import { createApp } from 'vue';
import App from './App.vue';
import router from "@/routes/index";

let app = createApp(App).use(router);

router.isReady().then(()=>{
    app.mount("#app");
});

