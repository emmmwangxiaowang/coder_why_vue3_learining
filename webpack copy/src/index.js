import { sum } from './js/main'
import './js/element'
import { createApp } from 'vue'
import axios from 'axios'

import App from './vue/App.vue'
const { priceFormat } = require('./js/format').default

axios.defaults.baseURL = ''
axios.defaults.timeout = 30000;


if (module.hot) {
    module.hot.accept('./js/element.js', () => {
        console.log('element模块发生了更新')
    })
}
console.log(sum(20, 30))
console.log(priceFormat())

console.log('hello world')


axios.get('/api/axios-vue').then(res => {

    console.log(res)
    console.log('emmmm')
}).catch(err => {
    console.log(err)
})



const app = createApp(App);
app.mount('#app')