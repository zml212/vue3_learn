<template>
  <my-slot>
    <button>按钮</button>
  </my-slot>
  <my-slot>
    <h5>我是文本</h5>
    <button>按钮2</button>
  </my-slot>
</template>

<script>
import MySlot from "./MySlot.vue";

export default {
  name: "app",
  components: {
    MySlot,
  },
};
</script>

<style>
</style>