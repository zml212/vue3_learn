<template>
  <count :num="num" @click="add()"></count>
</template>

<script>
import count from "./Count.vue";

export default {
  name: "app",
  components: {
    count,
  },
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    add() {
      this.num++;
    },
  },
};
</script>

<style>
</style>