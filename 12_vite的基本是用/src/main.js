import { sum } from './js/math'
import _ from 'lodash-es'
import './css/style.css'
import './css/title.less'

import { createApp } from 'vue'
import App from './vue/App.vue'

console.log('hello world')
console.log(sum(1, 2))
console.log(_.join(['abc', 'bca'], '-'))

const titleEl = document.createElement('div')
titleEl.className = 'title'
titleEl.innerHTML = 'hello vite'
document.body.appendChild(titleEl)

createApp(App).mount('#app')