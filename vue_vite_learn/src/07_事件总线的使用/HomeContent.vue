<template>
  <div>
    <span>name:{{ name }}</span>
    <br />
    <span>age:{{ age }}</span>
  </div>
</template>

<script>
import emmitter from "./utils/eventBus";

export default {
  name: "homecontent",
  created() {
    emmitter.on("btn", (info) => {
      console.log(info.name);
      console.log(info.age);
      this.name = info.name;
      this.age = info.age;
    });
  },
  data() {
    return {
      name: "",
      age: 0,
    };
  },
};
</script>

<style>
</style>