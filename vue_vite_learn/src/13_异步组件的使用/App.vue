<template>
  <div>
    <Home></Home>
    <Async-Cate></Async-Cate>
  </div>
</template>
    
<script>

import  Home  from "./Home.vue";
import AsyncCate from "./AsyncCategoires.vue"

export default {
  components:{
    Home,
    AsyncCate,

  }
};
</script>

<style scoped>
</style>