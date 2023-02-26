<template>
  <show-message :title="123" :content="345"></show-message>
</template>

<script>
import ShowMessage from "./ShowMessage.vue";

export default {
  name: "app",
  components: {
    ShowMessage,
  },
};
</script>

<style>
</style>