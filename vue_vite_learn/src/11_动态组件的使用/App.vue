<template>
  <button v-for="(item, index) in tags" :key="index" @click="clickBtn(item)">
    {{ item }}
  </button>
  <template v-if="clickbtn == 'Home'">
    <Home></Home>
  </template>
  <template v-else-if="clickbtn == 'About'">
    <About></About>
  </template>
  <template v-else>
    <Categories></Categories>
  </template>
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
      clickbtn: "1",
    };
  },
  methods: {
    clickBtn(item) {
      this.clickBtn = item;
    },
  },
};
</script>

<style scoped>
</style>