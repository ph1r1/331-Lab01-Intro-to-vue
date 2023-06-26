const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    const image = ref("./assets/images/socks_green.jpg");
    const inStock = ref(true);
    const inventory = ref(100);
    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    return {
      product,
      image,
      inStock,
      inventory,
      details,
    };
  },
}).mount("#app");
