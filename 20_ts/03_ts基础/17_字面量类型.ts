// 'hello world' 也是可以作为类型的, 叫做 字面量类型
const msg:'hello world'='hello world'

// 字面量类型的意义,就是必须结合联合类型
type Alignment='left'|'right'|'center' 
let align:Alignment='right'
align='center'


type Method='GET'|'POST'
function request(url:string,method:Method){}

type Request={
  url:string,
  method:Method
}

// 如果不写类型 的话默认类型推断是 string
const options:Request={
  url:'http://www.baidu.com',
  method:'POST'
}

// 若 options 不指定类型, 则调用的时候也可以指定
// request(options.url,options.method as Method)
request(options.url,options.method)


export{}