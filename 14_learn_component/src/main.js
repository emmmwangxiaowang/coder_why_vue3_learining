import { createApp } from 'vue'
import App from './13_引入元素和组件/App.vue'

// import { sum } from './12_异步组件的使用/utils/math'

// 通过 import函数导入的模块, 后续 webpack 对其进行打包的时候会进行分包的操作
// import ("./12_异步组件的使用/utils/math").then(res => {
//     console.log(res.sum(1, 2))
// })

createApp(App).mount('#app');

// console.log(sum(1, 2))