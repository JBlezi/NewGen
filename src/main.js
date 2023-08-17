import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assuming you named it router.js
import './assets/tailwind.css'


const app = createApp(App);
app.use(router);

app.mount('#app');
