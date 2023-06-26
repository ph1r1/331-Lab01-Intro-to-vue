const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const cart = ref([]);
    const premium = ref(false);
    const updateCart = (id) => {
      cart.value.push(id);
      // console.log(cart.value);
    };
    return {
      cart,
      premium,
      updateCart,
    };
  },
});

app.component("product-display", productDisplay);

app.mount("#app");
