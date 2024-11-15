import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCars = createAsyncThunk(
    'getCars',
    async (page, { rejectWithValue}) => {
        try {
            const res = await axios('http://192.168.100.2:3000/api/v1/cars/', {
                params:{
                    page: page,
                }
            });
            return res.data;
        } catch (e) {
            return rejectWithValue(e);
        }
    });

export const getCarsDetails = createAsyncThunk(
    'getCarsDetails',
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios('http://192.168.100.2:3000/api/v1/cars/' + id);
            return res.data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);
