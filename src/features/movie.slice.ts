import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/models';
import { Slices } from '../types';

type MoviesState = {
    favoriteMovies: { [key: string]: Movie };
}

const initialState: MoviesState = {
    favoriteMovies: {},
};

const handleToggleFavorite = (state: MoviesState, action: PayloadAction<Movie>) => {
    const movie = action.payload;
    if (state.favoriteMovies[movie.id]) {
        delete state.favoriteMovies[movie.id];
    } else {
        state.favoriteMovies[movie.id] = movie;
    }
};

export const moviesSlice = createSlice(
    {
        name: Slices.MOVIES,
        initialState,
        reducers: {
            toggleFavorite: handleToggleFavorite,
        },
    }
);

export const { toggleFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;
