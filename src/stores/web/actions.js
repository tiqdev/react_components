import store from "..";
import { _setActiveTab } from ".";


export const setActiveTab = (tab) => store.dispatch(_setActiveTab(tab));