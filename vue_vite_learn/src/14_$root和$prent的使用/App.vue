<template>
  <div>
    <child></child>
  </div>
</template>
    
<script>
import child from "./child.vue"
export default {
    name:'app',
    components:{
        child,
    }
};
</script>

<style scoped>

</style>