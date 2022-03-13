import { createApp } from 'vue'
import App from './07_compositionAPI练习/App.vue'

const app = createApp(App);
// app.mixin({
//     data() {
//         return {}
//     },
//     methods: {

//     },
//     created() {
//         console.log('全局');
//     }
// })

app.mount('#app')