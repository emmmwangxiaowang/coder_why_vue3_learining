<template>
    <div>
        <h2>{{message}}</h2>
    </div>
</template>

<script>
    export default {
        props:{
            message:{
                type:String,
                required:true
            }
        },
        // 参数一: props 父组件传递过来的属性
        // setup(props,context) {
        //     console.log(props.message);
        //     console.log(context.attrs.id);
        //     console.log(context.slots);
        //     console.log(context.emit);
        // },
        // {attrs,slots,emit}  对 context 进行结构的写法
        setup(props,{attrs,slots,emit}) {
            console.log(props.message);
            console.log(attrs.id);
            console.log(slots);
            console.log(emit);
        }
    }
</script>

<style scoped>

</style>