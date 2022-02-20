<template>
    <div>
        <show-message title="emmm" content="王小王"></show-message>
        <show-message :title="title" :content="content"></show-message>
        <show-message :title="message.title" :content="message.content"></show-message>
        <show-message :="message"></show-message>
    </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue'
export default {
    components: { ShowMessage },
    data(){
        return {
            title:'蒋莹莹',
            content:'李墁墁',
            message:{
                title:'陈昌霖',
                content:'廖明月'
            }
        }
    } 
}
</script>

<style scoped>

</style>