<template>
  <button v-for="(item, index) in tags" :key="index" @click="clickBtn(item)">
    {{ item }}
  </button>
  <!-- <home></home> -->
  <!-- <about></about> -->
  <component :is="clickbtn" name="海绵宝宝" age="12"></component>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Categoires from "./pages/Categoires.vue";

export default {
  name: "app",
  components: {
    Home,
    About,
    Categoires,
  },
  data() {
    return {
      tags: ["Home", "About", "Categories"],
      clickbtn: "Home",
    };
  },
  methods: {
    clickBtn(item) {
      this.clickBtn = item;
      console.log(item);
      console.log(this.clickBtn);
    },
  },
};
</script>

<style scoped>
</style>