
<script>
    export default {
        render(){
            return (
                <div>
                    <h2>hello world</h2>    
                    {this.$slots.default ? this.$slots.default() : <span>emmm</span>}
                </div>
            )
        }
    }
</script>

<style scoped>

</style>