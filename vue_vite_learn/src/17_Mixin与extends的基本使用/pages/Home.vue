<template>
  <div>
    <h1>home</h1>
    <h2>{{ title }}</h2>
    <button @click="bar">extends按钮</button>
  </div>
</template>
    
<script>

import BasePage from './BasePage.vue';

export default {
    extends: BasePage,
    data(){
        return { 
            content:'Hello',
        }
    }
};
</script>

<style scoped>

</style>