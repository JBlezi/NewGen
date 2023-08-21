import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assuming you named it router.js
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';




const app = createApp(App);


library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faChevronDown);
library.add(faCoffee);
library.add(faFacebookF, faInstagram, faYoutube);


app.component('font-awesome-icon', FontAwesomeIcon);



app.use(router);

app.mount('#app');
