import { sum } from './js/main'
import './js/element'
import { createApp } from 'vue'

import App from './vue/App.vue'
const { priceFormat } = require('./js/format').default


console.log(sum(20, 30))
console.log(priceFormat())



const app = createApp(App);
app.mount('#app')