import { createSlice } from '@reduxjs/toolkit';
import { Slices } from '../types';

type ThemeState = {
    isDarkTheme: boolean;
};

const initialState: ThemeState = {
    isDarkTheme: false,
};

const handleToggleTheme = (state: ThemeState) => {
    state.isDarkTheme = !state.isDarkTheme;
};

export const themeSlice = createSlice(
    {
        name: Slices.THEME,
        initialState,
        reducers: {
            toggleTheme: handleToggleTheme,
        },
    }
);

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
