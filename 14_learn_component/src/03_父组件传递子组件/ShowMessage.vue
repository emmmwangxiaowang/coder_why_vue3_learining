<template>
    <div>
        <!-- 绑定 非 props 中的属性 -->
        <!-- $attrs :继承传过来的 所有 属性 -->
        <!-- :class="$attrs.class" 继承传过来的 class 属性 ... -->
        <h2 :='$attrs' >{{title}}</h2>
        <p>{{content}}</p>
        <h2>{{counter}}</h2>
    </div>
</template>

<script>
    export default {
        // 这种写法无法对父组件传来的值进行限制
        // props:['title','content']

        inheritAttrs:false,
        props:{
            title:String,
            content:{
                type:String,
                // 必传
                // required:true,
                // 默认值
                default(){
                    return '王小王'
                }

            },
            counter:{
                type:String,
                // required:true,
                // default:'王小王'
                // 如果是引用类型 默认值必须是 返回一个函数, 每次调用都新创建一个对象!
                default(){
                    return '王小王'
                }
            }
        }
    }
</script>

<style scoped>

</style>