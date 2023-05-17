import { createStore } from "vuex";


const removerAcentos = (string) => {
  const mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g,
  };
  for (let letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra];
    string = string.replace(expressaoRegular, letra);
  }
  return string;
};

export default createStore({
  state: {
    women: [
      {
        title: "Spring Start",
        src: require("@/assets/img/women/1.jpg"),
        price: 499,
        description:
          "Original Design",
        type: "Coat",
        color: "Black",
        brand: "Alexander McQueen",
        gender: "women",
        id: 1,
      },

      {
        title: "Sunny delight",
        src: require("@/assets/img/women/2.jpg"),
        price: 799,
        description:
          "Original Design.",
        type: "Coat",
        color: "Grey",
        brand: "Givenchy",
        gender: "women",
        id: 2,
      },
      {
        title: "Royal Light",
        src: require("@/assets/img/women/3.jpeg"),
        price: 899,
        description:
            "Original Design.",
        type: "Coat",
        color: "Light brown",
        brand: "Golden Goose",
        gender: "women",
        id: 3,
      },
      {
        title: "Winter warm",
        src: require("@/assets/img/women/4.jpg"),
        price: 1399,
        description:
            "Original Design.",
        type: "Winter Coat",
        color: "Dark Brown",
        brand: "Loro Piana",
        gender: "women",
        id: 4,
      },
      {
        title: "Casual Monday",
        src: require("@/assets/img/women/5.jpg"),
        price: 399,
        description:
            "Original Design.",
        type: "Coat",
        color: "Light Brown",
        brand: "Saint Laurent",
        gender: "women",
        id: 5,
      },
      {
        title: "Evening Charm",
        src: require("@/assets/img/women/6.jpg"),
        price: 999,
        description:
            "Original Design.",
        type: "Coat",
        color: "Red",
        brand: "Gucci",
        gender: "women",
        id: 6,
      },
      {
        title: "Morning Coffee",
        src: require("@/assets/img/women/7.png"),
        price: 399,
        description:
            "Original Design.",
        type: "Coat",
        color: "Light Brown",
        brand: "Alexander McQueen",
        gender: "women",
        id: 7,
      },
      {
        title: "Autumn Await",
        src: require("@/assets/img/women/8.jpg"),
        price: 699,
        description:
            "Original Design.",
        type: "Winter Coat",
        color: "Black",
        brand: "Dolce & Gabbana",
        gender: "women",
        id: 8,
      },
      {
        title: "Snow Fight",
        src: require("@/assets/img/women/9.jpg"),
        price: 1599,
        description:
            "Original Design.",
        type: "Winter Coat",
        color: "Brown",
        brand: "Alexander McQueen",
        gender: "women",
        id: 9,
      },

      {
        title: "Evening Run",
        src: require("@/assets/img/women/10.png"),
        price: 299,
        description:
            "Original Design.",
        type: "Coat",
        color: "Gold",
        brand: "Dolce & Gabbana",
        gender: "women",
        id: 10,
      },
      {
        title: "Night Adventure",
        src: require("@/assets/img/women/11.jpg"),
        price: 799,
        description:
            "Original Design.",
        type: "Coat",
        color: "Black",
        brand: "Gucci",
        gender: "women",
        id: 11,
      },
    ],
    men: [
      {
        title: "Vintage",
        src: require("@/assets/img/men/1.jpg"),
        price: 1999,
        description:
            "Original Design.",
        type: "Coat",
        color: "Light Black",
        brand: "Alexander McQueen",
        gender: "men",
        id: 12,
      },
      {
        title: "Classic",
        src: require("@/assets/img/men/2.jpg"),
        price: 1999,
        description:
            "Original Design.",
        type: "Coat",
        color: "Black",
        brand: "Alexander McQueen",
        gender: "men",
        id: 13,
      },
      {
        title: "Royal Walk",
        src: require("@/assets/img/men/3.jpg"),
        price: 3999,
        description:
            "Original Design.",
        type: "Coat",
        color: "Dark Grey",
        brand: "Givenchy",
        gender: "men",
        id: 14,
      },
      {
        title: "Night Walk",
        src: require("@/assets/img/men/4.jpg"),
        price: 999,
        description:
            "Original Design.",
        type: "Coat",
        color: "Black",
        brand: "Golden Goose",
        gender: "men",
        id: 15,
      },
      {
        title: "Morning Coffee",
        src: require("@/assets/img/men/5.jpg"),
        price: 499,
        description:
            "Original Design.",
        type: "Coat",
        color: "Blue",
        brand: "Loro Piana",
        gender: "men",
        id: 16,
      },
      {
        title: "Paris Adventure",
        src: require("@/assets/img/men/6.jpg"),
        price: 799,
        description:
            "Original Design.",
        type: "Coat",
        color: "Gold",
        brand: "Gucci",
        gender: "men",
        id: 17,
      },
      {
        title: "Meeting Stop",
        src: require("@/assets/img/men/7.jpg"),
        price: 399,
        description:
            "Original Design.",
        type: "Jacket",
        color: "Grey",
        brand: "Off-White",
        gender: "men",
        id: 18,
      },
      {
        title: "Sunday Shop",
        src: require("@/assets/img/men/8.jpg"),
        price: 299,
        description:
            "Original Design.",
        type: "Coat",
        color: "Brown",
        brand: "Gucci",
        gender: "men",
        id: 19,
      },
      {
        title: "Train To Catch",
        src: require("@/assets/img/men/9.jpg"),
        price: 299,
        description:
            "Original Design.",
        type: "Coat",
        color: "Light Brown",
        brand: "Loro Piana",
        gender: "men",
        id: 20,
      },
      {
        title: "Evening Drink",
        src: require("@/assets/img/men/10.jpg"),
        price: 1499,
        description:
            "Original Design.",
        type: "Jacket",
        color: "Black",
        brand: "Golden Goose",
        gender: "men",
        id: 21,
      },
      {
        title: "Running Thought",
        src: require("@/assets/img/men/11.jpg"),
        price: 1199,
        description:
            "Original Design.",
        type: "Coat",
        color: "Dark Grey",
        brand: "Alexander McQueen",
        gender: "men",
        id: 22,
      },
    ],
    cart: [],
    product: {},
    searchWord: null,
    filteredProducts: null,
    tax: 21,
    shipping: 30,
  },
  getters: {
    allProducts: (state) => state.women.concat(state.men),
    getWomen: (state) => state.women,
    getMen: (state) => state.men,

    getCart: (state) => state.cart,
    cartItemCount: (state) => state.cart.length,

    getSearchWord: (state) => state.searchWord,

    getFilteredProduct: (state) => state.filteredProducts,

    getProductByIdWomen: (state) => (id) =>
      state.women.find((women) => women.id === parseInt(id)),

    getProductByIdMen: (state) => (id) =>
      state.men.find((men) => men.id === parseInt(id)),

    cartTotalPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.quantityPrice;
      });
      return total.toFixed(2);
    },

    getTax: (state) => state.tax,
    getShipping: (state) => state.shipping,

    cartCheckoutPrice: (state) => {
      let total = 0;

      state.cart.forEach((item) => {
        total = item.quantityPrice + state.shipping;
        total = total + (total * state.tax) / 100;
      });
      return total.toFixed(2);
    },
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity, size, quantityPrice }) => {
      let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
      });
      if (productInCart) {
        productInCart.quantity += quantity;
        productInCart.quantityPrice += productInCart.product.price;
        productInCart.quantityPrice =
          Math.round(productInCart.quantityPrice * 100) / 100;
        return;
      }
      state.cart.push({ product, quantity, size, quantityPrice });
    },

    REMOVE_FROM_CART: (state, product) => {
      state.cart = state.cart.filter((item) => {
        return item.product.id !== product.id;
      });
    },

    GET_PRODUCT_DETAILS: (state, product) => {
      state.productDetails.push(product);
    },

    FILTERED_PRODUCTS(state, word) {
      if (!word || word === "{}") {
        state.searchWord = null;
        state.filteredProducts = null;
      } else {
        state.searchWord = word;
        word = removerAcentos(word.trim().toLowerCase());
        state.filteredProducts = state.women
          .concat(state.men)
          .filter((product) => {
            return (
              product.title.toLowerCase().includes(word) ||
              product.brand.toLowerCase().includes(word) ||
              product.color.toLowerCase().includes(word) ||
              product.type.toLowerCase().includes(word)
            );
          });
      }
    },

    ORDER_SUCCESSFUL(state) {
      state.cart = [];
    },
  },
  actions: {
    addProductToCart: (
      { commit },
      { product, quantity, size, quantityPrice }
    ) => {
      commit("ADD_TO_CART", { product, quantity, size, quantityPrice });
    },
    removeProductFromCart: ({ commit }, product) => {
      commit("REMOVE_FROM_CART", product);
    },
    filterProducts({ commit }, word) {
      commit("FILTERED_PRODUCTS", word);
    },
    orderSuccess({ commit }) {
      commit("ORDER_SUCCESSFUL");
    },
  },
  modules: {},
});
