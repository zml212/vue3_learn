<template>
  <div v-for="(item, index) in names" :key="index">
    <slot :item="item" :index="index"></slot>
  </div>
</template>

<script>
export default {
  name: "showName",
  props: ["names"],
};
</script>

<style>
</style>