import { createApp } from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(Vue2TouchEvents)
  .mount('#app');
