import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/movies.slice';
import { Movie } from '../types';
import { MovieCard } from './movieCard.component';

type Props = {
    movies: Movie[];
}

export const MoviesList: React.FC<Props> = (props) => {

    const dispatch = useDispatch();

    const handleToggleFavorite = (movie: Movie) => {
        dispatch(toggleFavorite(movie));
    };

    const keyExtractor = (item: Movie, index: number) => `${item.id}_${String(index)}`;
    const renderItem = ({ item }: { item: Movie }) => <MovieCard
        movie={item}
        onToggleFavorite={handleToggleFavorite}
    />;


    return <View style={styles.container}>
        <FlatList
            data={props.movies}
            style={styles.flatListStyle}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    </View>;
};


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        flatListStyle: {
            flex: 1,
        },
    }
);
