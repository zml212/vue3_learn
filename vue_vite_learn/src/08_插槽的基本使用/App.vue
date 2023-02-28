<template>
  <my-slot>
    <button>按钮</button>
  </my-slot>
  <my-slot>
    <h5>我是文本</h5>
    <button>按钮2</button>
    <test></test>
  </my-slot>
</template>

<script>
import MySlot from "./MySlot.vue";
import test from "./test.vue";

export default {
  name: "app",
  components: {
    MySlot,
    test,
  },
};
</script>

<style>
</style>