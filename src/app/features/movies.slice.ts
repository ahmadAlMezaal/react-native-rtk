import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../types/models';
import { Slices } from '../../types';
import { fetchMovies } from '../thunks/movies.thunk';

type MoviesState = {
    movies: Movie[];
    favoriteMovies: { [key: string]: Movie };
}

const initialState: MoviesState = {
    movies: [],
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
        extraReducers: (builder) => {
            builder
                .addCase(
                    fetchMovies.pending,
                    (state, action) => {
                    }
                )
                .addCase(
                    fetchMovies.fulfilled,
                    (state, action) => {

                    }
                )
                .addCase(
                    fetchMovies.rejected,
                    (state, action) => {

                    }
                )
        },
    }
);

export const { toggleFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;
// Clone Alam Nour
// Read more about Redux & Redux Principles
// Check more about action creators