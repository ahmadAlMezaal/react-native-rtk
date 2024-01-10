import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/movie.slice';
import MovieCard from './movieCard.component';
import { Movie } from '../types';
import { RootState } from '../../store';
import { availableMovies } from '../db/localdb';

export const MoviesList: React.FC = () => {

    const dispatch = useDispatch();
    const favoriteMovies = useSelector((state: RootState) => state.movies.favoriteMovies);

    const [activeTab, setActiveTab] = useState<string>('All');

    const handleToggleFavorite = (movie: Movie) => {
        dispatch(toggleFavorite(movie));
    };

    const keyExtractor = (item: Movie, index: number) => `${item.id}_${String(index)}`;
    const renderItem = ({ item }: { item: Movie }) => <MovieCard
        movie={item}
        onToggleFavorite={handleToggleFavorite}
    />;

    const displayedMovies = activeTab === 'All' ? availableMovies : Object.values(favoriteMovies);

    return <View style={styles.container}>
        <View style={styles.tabsContainer}>
            <Pressable
                style={[styles.tab, activeTab === 'All' ? styles.activeTab : {}]}
                onPress={() => setActiveTab('All')}
            >
                <Text style={styles.tabText}>Home</Text>
            </Pressable>

            <Pressable
                style={[styles.tab, activeTab === 'Favorites' ? styles.activeTab : {}]}
                onPress={() => setActiveTab('Favorites')}
            >
                <Text style={styles.tabText}>Favorite Movies</Text>
            </Pressable>
        </View>
        <FlatList
            data={displayedMovies}
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
        tabsContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            borderBottomWidth: 1,
            borderColor: '#e0e0e0',
        },
        tab: {
            flex: 1,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 3,
            borderColor: 'transparent',
        },
        activeTab: {
            borderColor: '#007bff',
        },
        tabText: {
            color: 'black',
            fontWeight: '600',
        },
        buttonText: {
            color: 'black',
        },
    }
);
