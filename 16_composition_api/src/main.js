import { createApp } from 'vue'
import App from './04_computed和watch/App.vue'

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