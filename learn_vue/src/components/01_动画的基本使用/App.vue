<template>
  <div>
    <button @click="change()">点击切换</button>
     
    
  </div>
</template>
    
<script>
export default {
  data(){
    return {
      isTrue:true,
    }
  
  },
  methods:{
    change(){
      this.isTrue = !this.isTrue;
      console.log(this.isTrue);
    }
  }
};
</script>

<style scoped>
.style{
  width:300px;
  height:200px;
  background:#ededed;
  border:2px solid #000;
}
.hmbb-enter-from,
.hmbb-leave-to{
  opacity:0;
}

.hmbb-enter-to,
.hmbb-leave-from{
  opacity:1;
}

.hmbb-enter-active,
.hmbb-leave-active{
  transition:opacity 1s ease;
}
</style>