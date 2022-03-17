<template>
    <div>
        <h2>当前计数:{{counter}}</h2>
        <h2>当前计数*2:{{doubleCounter}}</h2>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>

        <h2>{{data}}</h2>
            <button @click="changeData">修改data</button>

        <p class="content"></p>

        <div class="scroll">
            <div class="scroll-x">scroll-x:{{scrollX}}</div>
            <div class="scroll-y">scroll-y:{{scrollY}}</div>
        </div>

        <div class="mouse">
            <div class="mouse-x">mouseX:  {{mouseX}}</div>
            <div class="mouse-y">mouseX:  {{mouseY}}</div>
        </div>

    </div>
</template>

<script>

import useCounter from './hooks/useCounter.ts'
import useTitle from './hooks/useTitle.ts'
import useScrollPosition from './hooks/useScrollPosition.ts'
import useMousePosition from './hooks/useMousePosition.ts'
import useLocalStorage from './hooks/useLocalStorage.ts'

export default {
    setup () {
        
        const {counter,doubleCounter,decrement,increment}=useCounter()

        const titleRef=useTitle("wang")
        setTimeout(() => {
           titleRef.value="jiang" 
        }, 2000);


       // 滚动位置
       const{scrollX,scrollY}=useScrollPosition();

        // 鼠标位置
        const {mouseX,mouseY}=useMousePosition();

        const changeData=()=>{
            data.value="emmm"
        }

        // localStorage
        const data = useLocalStorage("info")
        return {
            counter,
            doubleCounter,

            increment,
            decrement,

            scrollY,
            scrollX,

            mouseX,
            mouseY,

            data,
            changeData
        }
    }
}
</script>

<style scoped>
    .content{
        width: 3000px;
        height: 5000px;
    }

    .scroll{
        position: fixed;
        right: 30px;
        bottom: 30px;
    }

    .mouse{
        position: fixed;
        right:30px;
        bottom:80px;
    }
</style>