import { createSlice } from "@reduxjs/toolkit";
import { fetchTodo } from "redux/operations/todoThunk";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const PENDING = (state) => {
    state.isLoading = true;
    state.error = null;
};

const REJECTED = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const todoSlicer = createSlice({
    name: "todo",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodo.pending, PENDING)
        .addCase(fetchTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchTodo.rejected, REJECTED)
    }
})

export const todoReducer = todoSlicer.reducer;