<template>
  <div>我是Home组件{{ age }}--{{ name }}</div>
</template>

<script>
export default {
  name: "home",
  props: ["name", "age"],
};
</script>

<style scoped>
</style>