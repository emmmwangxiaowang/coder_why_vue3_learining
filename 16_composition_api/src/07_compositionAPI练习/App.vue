<template>
    <div>
        <h2>当前计数:{{counter}}</h2>
        <h2>当前计数*2:{{doubleCounter}}</h2>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>

        <p class="content"></p>

        <div class="scroll">
            <div class="scroll-x">scroll-x:{{scrollX}}</div>
            <div class="scroll-y">scroll-y:{{scrollY}}</div>
        </div>
    </div>
</template>

<script>

import useCounter from './hooks/useCounter.ts'
import useTitle from './hooks/useTitle.ts'
import useScrollPosition from './hooks/useScrollPosition.ts'

export default {
    setup () {
        
        const {counter,doubleCounter,decrement,increment}=useCounter()

        const titleRef=useTitle("wang")
        setTimeout(() => {
           titleRef.value="jiang" 
        }, 2000);


       const{scrollX,scrollY}=useScrollPosition();

        return {
            counter,
            doubleCounter,
            increment,
            decrement,
            scrollY,
            scrollX
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
</style>