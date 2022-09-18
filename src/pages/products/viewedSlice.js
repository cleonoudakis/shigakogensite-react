import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    viewed: []
}

const viewSlice = createSlice({
    name: 'viewed',
    initialState,
    reducers: {
        addViewed: (state, action) => {
            const newViewed = {
                id: state.viewed.length + 1,
                ...action.payload
            };
            state.viewed.push(newViewed);
        }
    }
})

export const viewReducer = viewSlice.reducer;

export const { addViewed } = viewSlice.actions;