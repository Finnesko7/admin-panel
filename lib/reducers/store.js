import {configureStore} from "@reduxjs/toolkit";
import rcFilterReducer from "./rc-filters";

export default configureStore({
    reducer: {
        rcFilters: rcFilterReducer
    }
})