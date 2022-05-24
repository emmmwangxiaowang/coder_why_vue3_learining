import { number } from "echarts"

function foo(){}

type FooFnType=()=>void
function bar(fn:FooFnType){
  fn()
}

bar(foo)

// 定义常量的时候, 编写函数类型
// (num1:number,num2:number)=>void  这个是函数的类型
const add:(num1:number,num2:number)=>void=(num1:number,num2:number)=>{
  return num1 +num2
}