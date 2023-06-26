const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const cart = ref(0);
    const premium = ref(false);
    const updateCart = () => {
      cart.value += 1;
      //   cart.value.push(id);
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
