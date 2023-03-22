<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="foo">按钮</button>
    <Home></Home>
  </div>
</template>
    
<script> 
import {demoMixin} from './Mixins/demoMixin.js'
import Home from './pages/Home.vue'

export default {
  components:{
    Home,
  },
  mixins:[demoMixin],
  data(){
    return {
      message: 'hello', 
    }
  }
};
</script>

<style scoped>

</style>