// tuple 元组: 多种元素的组合
const info : any[]=['wang',21,1.62]

// 数组无法确定拿到的元素是什么类型 --这个 name 是 any类型
const name=info[0]

console.log(name.length)

// 元组的特点 给每个元素设置对应的类型
const info1:[string,number]=['wang',123]
// 这里 name1 是 number 类型
const name1=info1[1]

export{}