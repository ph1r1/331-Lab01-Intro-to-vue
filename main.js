const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const cart = ref([]);
    const premium = ref(false);
    const updateCart = (id) => {
      cart.value.push(id);
    };
    const removeCart = () => {
      cart.value = [];
    };
    return {
      cart,
      premium,
      updateCart,
      removeCart,
    };
  },
});

app.component("product-display", productDisplay);

app.mount("#app");
