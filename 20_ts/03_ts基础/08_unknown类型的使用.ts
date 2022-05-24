function foo(){
  return 'abc'
}

function bar(){
  return 123
}

let flag=true
// unknown 类型只能赋值给 any 和 unknown类型
// any 类型可以赋值给任意类型
let result:unknown
if(flag){
  result=foo()
}else{
  result=bar()
}

// ts 强类型 只能赋值给对应的类型, any 类型特殊
// let msg1:string =result