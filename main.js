const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const product = ref("Socks");
    return {
      product,
    };
  },
}).mount("#app");
