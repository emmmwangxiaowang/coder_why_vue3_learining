<template>
    <div>
        <button @click="addNum">添加数字</button>
        <button @click="removeNum">删除数字</button>
        <button @click="shuffleNum">数字洗牌</button>

        <transition-group tag="p" name="wang">
            <span class="item" v-for="item in numbers" :key="item">{{item}}</span>
        </transition-group>
    </div>
</template>

<script>
    import _ from 'lodash'
    export default {
        data(){
            return {
                numbers:[0,1,2,3,4,5,6,7,8,9],
                numCounter:10
            }
        },
        methods:{
            addNum(){
                this.numbers.push(this.numCounter++)
                this.numbers.splice(this.randomIndex,0,this.numCounter++)
            },
            removeNum(){
                this.numbers.splice(this.randomIndex,1)
            },
            randomIndex(){
                return Math.floor(Math.random()*this.numbers.length)
            },
            shuffleNum(){
                this.numbers=_.shuffle(this.numbers)
            }
        }
    }
</script>

<style scoped>
    .item{
        margin-right: 10px;
    }

    .wang-enter-from,
    .wang-leave-to{
        opacity: 0;
        transform: translateY(30px);
    }

    .wang-enter-active,
    .wang-leave-active{
        transition:all 1s ease;
    }
    
    /* 让删除的元素不占用 后面元素动画展示的场所 */
    .wang-leave-active{
        position: absolute;
    }

    .wang-move{
        transition: transform 1s ease;
    }

    span{
        display: inline-block;
    }
</style>