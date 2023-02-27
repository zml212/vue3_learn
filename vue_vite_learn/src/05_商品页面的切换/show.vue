<template>
  <div>这里是{{ show }}页面</div>
</template>

<script>
export default {
  nmae: "showPage",
  data() {
    return {
      show: this.title,
    };
  },
  props: ["title"],
};
</script>   

<style>
</style>