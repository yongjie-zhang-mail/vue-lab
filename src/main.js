import {createApp} from 'vue'
import App from './App.vue'
import './assets/main.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import {axios} from "axios";

// createApp(App).mount('#app')
const app = createApp(App);
app.use(ElementPlus);
// app.use(axios);
app.mount('#app');

