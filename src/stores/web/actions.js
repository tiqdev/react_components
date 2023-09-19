import store from "..";
import { _setActiveTab, _setTheme } from ".";


export const setActiveTab = (tab) => store.dispatch(_setActiveTab(tab));
export const setTheme = (theme) => store.dispatch(_setTheme(theme));