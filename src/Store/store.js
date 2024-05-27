import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import CardReducer from "./CartSlice"


export const store = configureStore({
    reducer : {
       product : ProductSlice,
       cart : CardReducer,
    }
}) 