import {ref,watch} from 'vue'

export default function(title="emm"){
    const titleRef=ref(title)

    // watch 是惰性的, 只有当监听的数据发生修改的时候, 才会执行, 一开始不会执行
    watch(titleRef,(newValue)=>{
        document.title=newValue
    },{
        immediate:true
    })

    return titleRef    
}