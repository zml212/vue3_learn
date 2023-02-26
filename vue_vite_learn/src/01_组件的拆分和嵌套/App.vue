<template>
  <fragment>
    <header1></header1>
    <main1></main1>
    <footer1></footer1>
  </fragment>
</template>

<script>
import header1 from "./Header.vue";
import main1 from "./main.vue";
import footer1 from "./footer.vue";

export default {
  name: "app",
  components: {
    header1,
    main1,
    footer1,
  },
};
</script>

<style>
</style>