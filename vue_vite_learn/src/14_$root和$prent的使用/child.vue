<template>
  <div>
    {{ message }}
  </div>
  <button @click="get()">点击我获取父组件和根组件</button>
</template>
    
<script>
export default {
    name:'child',
    data(){
        return {
            message:"我是子组件",
        }
    },
    methods:{
        get() {
            console.log(this.$root);
            console.log(this.$parent);
        }
    }
};
</script>

<style scoped>

</style>