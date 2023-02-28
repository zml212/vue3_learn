<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.nav-bar {
  display: flex;
}
.left,
.right {
  height: 80px;
  flex: 1;
  background-color: #ededed;
  border: 2px solid black;
}
.center {
  height: 80px;
  flex: 3;
  background-color: #ededed;
  border: 2px solid black;
}
</style>