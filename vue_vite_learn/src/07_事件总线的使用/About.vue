<template>
  <button @click="sendMsg()">点击我发送数据</button>
</template>

<script>
import emmitter from "./utils/eventBus";

export default {
  name: "about",
  methods: {
    sendMsg() {
      emmitter.emit("btn", { name: "海绵宝宝", age: 23 });
    },
  },
};
</script>

<style>
</style>