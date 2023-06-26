const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    const description = ref("these are boots!");
    return {
      product,
      description,
    };
  },
}).mount("#app");
