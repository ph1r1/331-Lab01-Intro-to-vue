const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    const image = ref("./assets/images/socks_green.jpg");
    const inStock = ref(true);
    const inventory = ref(100);
    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    const variants = ref([
      {
        id: 2234,
        color: "green",
      },
      {
        id: 2235,
        color: "blue",
      },
    ]);
    const cart = ref(0);
    const addToCart = () => {
      cart.value += 1;
    };
    return {
      product,
      image,
      inStock,
      inventory,
      details,
      variants,
      cart,
      addToCart,
    };
  },
}).mount("#app");
