import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tab: '1'
}

const tabSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        setActiveTab: (state, action) => {
            return { ...state, tab: action.payload}
        }
    }
})

export const tabReducer = tabSlice.reducer;
export const { setActiveTab } = tabSlice.actions;
export const getCurrentTab = (state) => { return state.tabs.tab };