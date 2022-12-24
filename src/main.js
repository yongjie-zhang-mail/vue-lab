import {createApp} from 'vue'
import App from './App.vue'
import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios';

const app = createApp(App);

app.use(ElementPlus);

axios.defaults.baseURL = "http://localhost:8080";
app.config.globalProperties.$axios = axios;

app.mount('#app');

