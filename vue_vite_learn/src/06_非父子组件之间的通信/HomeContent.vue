<template>
  <div>{{ name }}--{{ age }}</div>
</template>

<script>
export default {
  nmae: "homeContent",
  inject: ["name", "age"],
};
</script>

<style>
</style>