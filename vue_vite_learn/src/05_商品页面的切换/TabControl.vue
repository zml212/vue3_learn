<template>
  <div>
    <button @click="sendInfo()">{{ info }}</button>
    <show></show>
  </div>
</template>

<script>
import show from "./show.vue";

export default {
  name: "tabControl",
  data() {
    return {
      info: this.title,
    };
  },
  components: {
    show,
  },
  props: ["title"],
  methods: {
    sendInfo(title) {
      this.$emit("getInfo", title);
    },
  },
};
</script>

<style scoped>
button {
  display: inline;
  margin-left: 20px;
}
</style>