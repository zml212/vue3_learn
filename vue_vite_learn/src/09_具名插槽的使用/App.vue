<template>
  <nav-bar>
    <template v-slot:left>
      <button>左边按钮</button>
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