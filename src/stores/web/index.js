import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTab: "home",
    theme: "light",
    activeStep: 1,
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
        },
        _setActiveStep: (state, action) => {
            state.activeStep = action.payload
        }

    }
})

export const {
    _setActiveTab,
    _setTheme,
    _setActiveStep,
} = web.actions;

export default web.reducer