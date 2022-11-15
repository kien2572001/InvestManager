import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    userInfo: {},
    error: null,
    userToken: null,
    success: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {},
});
        