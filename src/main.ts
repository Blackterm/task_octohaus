import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from "element-plus";



import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons-vue'


const app = createApp(App)
app.use(ElementPlus);
app.use(router)

app.mount('#app')
