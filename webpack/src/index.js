import { sum } from './js/main'
import './js/element'
import { createApp } from 'vue'


import App from './vue/App.vue'
const { priceFormat } = require('./js/format').default

if (module.hot) {
    module.hot.accept('./js/element.js', () => {
        console.log('element模块发生了更新')
    })
}
console.log(sum(20, 30))
console.log(priceFormat())

console.log('hello world')

const app = createApp(App);
app.mount('#app')