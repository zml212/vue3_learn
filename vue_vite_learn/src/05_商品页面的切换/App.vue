<template>
  <tab-control @getInfo="showInfo" :title="msg1"></tab-control>
  <tab-control @getInfo="showInfo" :title="msg2"></tab-control>
  <tab-control @getInfo="showInfo" :title="msg3"></tab-control>
  <show-page :title="info"></show-page>
</template>

<script>
import TabControl from "./TabControl.vue";
import showPage from "./show.vue";

export default {
  name: "app",
  components: {
    TabControl,
  },
  data() {
    return {
      msg1: "衣服",
      msg2: "裤子",
      msg3: "鞋子",
      info: "",
    };
  },
  methods: {
    showInfo(data) {
      this.info = data;
      console.log(this.info);
    },
  },
};
</script>

<style>
</style>