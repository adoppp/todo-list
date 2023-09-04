import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64ee06fc1f8721827142332e.mockapi.io/"

export const fetchTodo = createAsyncThunk(
    "todo/fetchTodo",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("todo") 
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)