<template>
  <div>
    <h2>{{message}}</h2>
    <input v-model="message"><input>
  </div>
</template>
    
<script>
import input from "./input.vue" 
export default {
    name:'app',
    components:{
        input,
    },
    data(){
        return{
            message:'Hello World!!',
        }
    }
};
</script>

<style scoped>

</style>