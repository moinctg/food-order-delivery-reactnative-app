import { configureStore } from "@reduxjs/toolkit";

import basketSlice from "./src/slices/basketSlice";

import restaurantslice from "./src/slices/restaurantslice";
export const store = configureStore({
    reducer:{
        basket:basketSlice,
        restaurant:restaurantslice,
    }
})