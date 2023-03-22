import { createApp } from 'vue'
// import './style.css'
import App from './17_Mixin与extends的基本使用/App.vue'

const app = createApp(App);
// app.minix({
//     data() {
//         return {
//             message: 'zml',
//         }
//     },
//     methods: {
//         log() {
//             console.log("全局Mixin输出");
//         }
//     }
// })
app.mount('#app');