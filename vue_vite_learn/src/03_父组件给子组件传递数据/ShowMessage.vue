<template>
  <div>
    <ul>
      <li>{{ title }}</li>
      <li>{{ content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "showmessage",
  //   props: ["title", "content"],
  props: {
    title: String,
    content: {
      type: String,
      required: true, //是否为必传参数
      default: "678", // 默认值
    },
  },
};
</script>

<style>
</style>