import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tabState: [true, true]
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        updateTabState: (state, action) => {
            state.tabState[action.payload.index] = action.payload.open;
        }
    }
});

export const categoryReducer = categorySlice.reducer;
export const { updateTabState } = categorySlice.actions;

export const getCategoryState = (index) => (state) => {
    return state.categories.tabState[index];
}

export const getAllCategoryState = (state) => {
    return state.categories.tabState;
}