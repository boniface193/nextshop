import { configureStore } from '@reduxjs/toolkit'
import onboarding from "./modules/onboarding";
import products from "./modules/products"

// initial state
const initialState = {
  onboarding: onboarding.state,
  products: products.state,
};

//Convert object in string
const COPY = JSON.stringify(initialState);

export default configureStore({
  reducer: {
    onboarding: onboarding,
    products: products,
  },

  mutations: {
    reset(state) {
      //Convert string in object
      let copyState = JSON.parse(COPY);
      Object.keys(state).forEach(key => {
        Object.assign(state[key], copyState[key]);
      });
    }
  }
});
