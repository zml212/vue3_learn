<template>
  <home></home>
</template>

<script>
import home from "./Home.vue";

export default {
  name: "app",
  components: {
    home,
  },
  data() {
    return {
      name: "海绵宝宝",
      age: 23,
    };
  },
  provide() {
    return {
      name: this.name,
      age: this.age,
    };
  },
};
</script>

<style>
</style>