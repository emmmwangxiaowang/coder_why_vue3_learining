function useState<T>(state:T){
  let currentState=state;

  const changeState=(newState:T)=>{
    currentState=newState;
  }

  // 返回 tuple
  const arr:[T,(newState:T)=>void]=[currentState,changeState]
  return arr
}

const [counter,setCounter]=useState(10)

const[title,setTitle]=useState('emm')