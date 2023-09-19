import { configureStore } from "@reduxjs/toolkit";

// reducers
import web from "./web";

const store = configureStore({
    reducer: {
        web
    }
})

export default store