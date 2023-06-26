const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    const image = ref("./assets/images/socks_green.jpg");
    return {
      product,
      image,
    };
  },
}).mount("#app");
