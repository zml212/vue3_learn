<template>
  <div class="bar">
    <h2>headerbar,我来自{{ msg }}组件</h2>
    <h2>navbar,我来自{{ msg }}组件</h2>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      msg: "header",
    };
  },
};
</script>

<style scoped>
h2 {
  font-size: 20px;
  border: 1px solid black;
}
.bar {
  position: relative;
}
</style>