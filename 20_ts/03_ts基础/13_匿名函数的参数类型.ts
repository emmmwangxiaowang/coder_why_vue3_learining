// 通常情况下,再定义一个函数时,都会给参数加一个类型注解
function foo(msg:string){

}

const names=['abc','emmm']
// 匿名函数不用写类型,因为 item 是names的类型确定的, 会根据上下文环境推到出来
names.forEach((item)=>{
  
})