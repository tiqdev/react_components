import store from "..";
import { _setActiveStep, _setActiveTab, _setTheme } from ".";


export const setActiveTab = (tab) => store.dispatch(_setActiveTab(tab));
export const setTheme = (theme) => store.dispatch(_setTheme(theme));
export const setActiveStep = (step) => store.dispatch(_setActiveStep(step));