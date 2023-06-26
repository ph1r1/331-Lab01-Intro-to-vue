const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    return {
      product,
    };
  },
}).mount("#app");
