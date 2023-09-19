import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTab: "home"
}

const web = createSlice({
    name: "web",
    initialState,
    reducers: {
        _setActiveTab: (state, action) => {
            state.activeTab = action.payload
        }
    }
})

export const {
    _setActiveTab
} = web.actions;

export default web.reducer