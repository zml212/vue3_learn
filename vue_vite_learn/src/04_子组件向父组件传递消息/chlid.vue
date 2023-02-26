<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="sendMsg()">传递消息到父组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是要传递的信息",
    };
  },
  methods: {
    sendMsg() {
      this.$emit("getMsg", this.msg);
    },
  },
};
</script>

<style>
</style>