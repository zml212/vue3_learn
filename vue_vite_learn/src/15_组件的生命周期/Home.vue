<template>
  <div>
    
  </div>
</template>
    
<script>
export default {
    name:'home',
    beforeCreate(){
        console.log("创建之前");
    },
    created(){
        console.log("创建");
    },
    beforeMount(){
        console.log("挂载之前");
    },
    mounted(){
        console.log("挂载");
    },
    beforeUnmount(){
        console.log("");
    }
};
</script>

<style scoped>

</style>