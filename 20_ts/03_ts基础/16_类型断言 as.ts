// as 类型断言   和 强转类似
// const el =document.getElementById('title') as HTMLImageElement

function printMsg(msg?:string){
  // 一般情况下
  // if(msg){
  //   console.log(msg.length)
  // }

  // 非空断言 ! 一定  表示这个对象一定有值
  console.log(msg!.length)
}

printMsg('emmmmm')
