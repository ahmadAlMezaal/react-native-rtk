import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/movie.slice';
import MovieCard from './movieCard.component';
import { Movie } from '../types';
import { availableMovies } from '../db/localdb';

const MoviesList = () => {

    const dispatch = useDispatch();

    const [movies] = useState<Movie[]>(availableMovies);

    const handleToggleFavorite = (movie: Movie) => {
        dispatch(toggleFavorite(movie));
    };

    const keyExtractor = (item: Movie, index: number) => `${item.id}_${String(index)}`;
    const renderItem = ({ item }: { item: Movie }) => <MovieCard
        movie={item}
        onToggleFavorite={handleToggleFavorite}
    />;

    return <FlatList
        data={movies}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
    />;
};

export default MoviesList;
