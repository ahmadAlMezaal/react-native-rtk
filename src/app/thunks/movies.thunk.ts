import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../services/api/api.service';

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (parameters, { rejectWithValue }) => {
        try {
            const response = await apiService.fetchAllMovies()
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);
