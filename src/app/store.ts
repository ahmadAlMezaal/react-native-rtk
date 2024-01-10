import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/movie.slice';
import { themeReducer } from '../features/theme.slice';

export const store = configureStore(
    {
        reducer: {
            movies: moviesReducer,
            theme: themeReducer,
        },
    }
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
