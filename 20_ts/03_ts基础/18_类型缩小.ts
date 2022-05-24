type IDType=number | string
function printID(id:IDType){
  // 类型越走越小
  // 联合类型
  console.log(id)
  if(typeof id ==='string'){
    // string 类型
    console.log(id.toUpperCase)
  }else{
    // number 类型
    console.log(id)
  }
}