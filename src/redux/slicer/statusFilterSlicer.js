const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    filter: "",
}

const statusFilterSlicer = createSlice({
    name: "filter",
    initialState,
    reducers: {
        makeFilter(state, action) {
            state.filter = action.payload;
        },
    }
});

export const { makeFilter } = statusFilterSlicer.actions;

export const statusFilterReducer = statusFilterSlicer.reducer;