import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./api";

const initialState = {
    data: [],
    message: null,
    details: {},
    status: "idle",
};

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        setStateByName: (state, { payload }) => {
            const { name, value } = payload;
            state[name] = value;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCars.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(getCars.fulfilled, (state, action) => {
            state.status = 'success';
            console.log(state.data)
            state.data = {...state.data, ...action.payload};
            // state.data['data'] = [...state.data?.data, ...action.payload.data];
        });
        builder.addCase(getCars.rejected, (state, action) => {
            state.status = 'error';
            state.message = action.payload.data;
        });
    },
});

export { getCars }
export const selectCars = state => state.cars; //selector
export default carSlice.reducer;
