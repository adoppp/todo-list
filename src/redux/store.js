import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./slicer/todoSlicer";
import { statusFilterReducer } from "./slicer/statusFilterSlicer";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        filter: statusFilterReducer,
    },
})