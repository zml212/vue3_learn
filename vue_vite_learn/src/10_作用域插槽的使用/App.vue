<template>
  <child-cpn>
    <template #test>
      <button>按钮</button>
    </template>
  </child-cpn>
  <show-name :names="names">
    <template v-slot="slotProps">
      <button>{{ slotProps.item }}--{{ slotProps.index }}</button>
    </template>
  </show-name>
</template>
    
<script>
import childCpn from "./ChildCpn.vue";
import showName from "./ShowName.vue";

export default {
  name: "app",
  data() {
    return {
      names: ["12", "34", "56"],
    };
  },
  components: {
    childCpn,
    showName,
  },
};
</script>

<style>
</style>