import { createApp } from 'vue'
import App from './05_生命周期钩子/App.vue'

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