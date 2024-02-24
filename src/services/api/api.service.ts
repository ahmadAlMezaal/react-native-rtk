import { api } from './api.config';

const fetchAllMovies = () => {
    const route = '/movies';
    return api.get(route);
};

export const apiService = {
    fetchAllMovies,
};
