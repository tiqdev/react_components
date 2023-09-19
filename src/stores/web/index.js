import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTab: "home",
    theme: "light"
}

const web = createSlice({
    name: "web",
    initialState,
    reducers: {
        _setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        _setTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export const {
    _setActiveTab,
    _setTheme
} = web.actions;

export default web.reducer