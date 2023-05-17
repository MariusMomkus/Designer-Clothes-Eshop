import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCCDLsRcgofYfZrS2pzyFahNGVR-fQqLi4",
    authDomain: "web-shop-b8e83.firebaseapp.com",
    projectId: "web-shop-b8e83",
    storageBucket: "web-shop-b8e83.appspot.com",
    messagingSenderId: "494092465683",
    appId: "1:494092465683:web:f915a006cb82e07fccf1e6",
    measurementId: "G-TGQPJ8CHGE"
};

initializeApp(firebaseConfig);
createApp(App).use(router).use(store).mount("#app");
