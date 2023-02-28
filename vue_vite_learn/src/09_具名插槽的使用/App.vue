<template>
  <nav-bar>
    <template v-slot:left>
      <button>左边按钮</button>
    </template>
    <template v-slot:center>
      <div>中间文字</div>
    </template>
    <template v-slot:right>
      <li>列表</li>
    </template>
  </nav-bar>
</template>

<script>
import navBar from "./NavBar.vue";
export default {
  nmae: "app",
  components: {
    navBar,
  },
};
</script>

<style>
</style>