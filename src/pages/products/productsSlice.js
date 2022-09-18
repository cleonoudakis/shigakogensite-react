import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../app/assests/shared/PRODUCTS";

const initialState = {
    productsArray: PRODUCTS,
    currentProducts: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        selectProductByType: (state, action) => {
            state.currentProducts = state.productsArray.filter((product) => product.type === action.payload.type);
        },
        selectProductByStyle: (state, action) => {
            if (state.currentProducts.length) {
                state.currentProducts = state.currentProducts.filter((product) => product.style === action.payload.style);
            } else {
                state.currentProducts = state.productsArray.filter((product) => product.style === action.payload.style);
            }
        },
    }
})

export const productsReducer = productsSlice.reducer;
export const { selectProductByType, selectProductByStyle } = productsSlice.actions;

export const selectCurrentProducts = (state) => {
    return state.products.currentProducts;
}

export const selectAllProducts = (state) => {
    return state.products.productsArray;
}

export const selectRecommendedProducts = (state) => {
    return state.products.productsArray.some((product) => product.recommended);
}

export const selectLimitedProducts = (state) => {
    return state.products.productsArray.some((product) => product.limited);
}

export const selectNewProducts = (state) => {
    return state.products.productsArray.some((product) => product.new);
}

export const selectProductsByBrewery = (brewery) => (state) => {
    return state.products.productsArray.some((product) => product.brewery === brewery);
}

export const selectProductsByKeyword = (keyword) => (state) => {
    return state.products.productsArray.some((product) => product.keywords.contains(keyword) || product.title.contains(keyword));
}

export const selectProductById = (id) => (state) => {
    return state.products.productsArray.find((product) => product.id === parseInt(id));
}