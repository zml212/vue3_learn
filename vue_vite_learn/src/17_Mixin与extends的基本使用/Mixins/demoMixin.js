export const demoMixin = {
    data() {
        return {
            message: "hello mixin",
        }
    },
    methods: {
        foo() {
            console.log("执行了foo方法");
        }
    }

}