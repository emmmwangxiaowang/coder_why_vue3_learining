function printID(id:number|string|boolean){
  // 使用联合类型的值时,需要特别小心
  if(typeof id==='string'){
    // ts 帮助确定id一定时string 类型
    console.log(id.toUpperCase)
  }else{
    console.log(id)
  }
}

printID(123)

printID('abc')