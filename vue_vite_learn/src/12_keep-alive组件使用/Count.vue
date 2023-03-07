<template>
  <button>{{ num }}</button>
</template>

<script>
export default {
  name: "count",
  props: {
    num: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
</style>