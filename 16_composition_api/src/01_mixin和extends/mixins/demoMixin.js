export const demoMixin = {
    data() {
        return {
            message: "hello demoMinxin"
        }
    },
    methods: {
        foo() {
            console.log("demo minxin foo")
        }
    },
    created() {
        console.log("执行了 created");
    }
}