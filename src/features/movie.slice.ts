import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/models';
import { Slices } from '../types';

type MoviesState = {
    favoriteMovies: { [key: string]: Movie };
}

const initialState: MoviesState = {
    favoriteMovies: {},
};

export const moviesSlice = createSlice(
    {
        name: Slices.MOVIES,
        initialState,
        reducers: {
            toggleFavorite: (state, action: PayloadAction<Movie>) => {
                const movie = action.payload;
                if (state.favoriteMovies[movie.id]) {
                    delete state.favoriteMovies[movie.id];
                } else {
                    state.favoriteMovies[movie.id] = movie;
                }
            },
        },
    }
);

export const { toggleFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;
