import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

// 路由组件
import Home from './components/HomeLander.vue';
import AnimalBrowser from './components/AnimalBrowser.vue';
import MedicalServices from './components/MedicalServices.vue';
import AdoptionInfo from './components/AdoptionInfo.vue';

// 路由定义
const routes = [
  { path: '/', component: Home },
  { path: '/animals', component: AnimalBrowser },
  { path: '/medical-services', component: MedicalServices },
  { path: '/adoption-info', component: AdoptionInfo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount('#app');
