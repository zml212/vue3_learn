<template>
  <child @getMsg="showMsg"></child>
  <div>子组件传递的信息为：{{info}}</div>
</template>

<script>
import child from "./chlid.vue";

export default {
  name: "app",
  data() {
    return {
      info: "",
    };
  },
  components: {
    child,
  },
  methods: {
    showMsg(data) {
      console.log(data);
      this.info = data;
    },
  },
};
</script>

<style>
</style>