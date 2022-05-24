// 提前
function handleMsg(msg:string|number){
  switch(typeof msg){
    case 'string':
      console.log('string处理方式处理msg')
      break
    case 'number':
      console.log('number处理方式处理msg')
      break
    default:
      const check:never=msg
  }
}