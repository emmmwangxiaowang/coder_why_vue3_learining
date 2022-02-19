import '../css/style.css'
import '../css/title.less'
import '../css/image.css'
import '../font/iconfont.css'
import src from '../img/img104.jpg'

const divEl = document.createElement("div")
divEl.className = 'title'
divEl.innerHTML = '王小王'

// 设置背景图片
const bgDivEl = document.createElement('div')
bgDivEl.className = 'image-bg'


// 设置img元素的src
const imgEl = document.createElement('img')
imgEl.src = src
console.log('就是就是');
// i元素
const iEl = document.createElement('i')
iEl.className = 'iconfont icon-chihaochide'

document.body.appendChild(bgDivEl)
document.body.appendChild(divEl)
document.body.appendChild(imgEl)
document.body.appendChild(iEl)