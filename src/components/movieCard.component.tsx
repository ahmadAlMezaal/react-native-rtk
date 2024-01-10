import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const MovieCard = ({ movie, onToggleFavorite }) => {

    const favoriteMovies = useSelector((state: RootState) => state.movies.favoriteMovies);

    return <View style={styles.card}>
        <Image source={{ uri: movie.imageUrl }} style={styles.image} />
        <View style={styles.infoContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Pressable
                style={styles.favoriteButton}
                onPress={() => onToggleFavorite(movie)}
            >
                <Text style={styles.favoriteText}>{favoriteMovies[movie.id] ? '❤️' : '🤍'}</Text>
            </Pressable>
        </View>
    </View>;
};

const styles = StyleSheet.create(
    {
        card: {
            flexDirection: 'row',
            margin: 10,
            backgroundColor: '#fff',
            borderRadius: 8,
            overflow: 'hidden',
            elevation: 3,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        },
        image: {
            width: 100,
            height: 150,
        },
        infoContainer: {
            padding: 10,
            flex: 1,
            justifyContent: 'space-between',
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        favoriteButton: {
            alignSelf: 'flex-end',
        },
        favoriteText: {
            fontSize: 24,
        },
    }
);

export default MovieCard;
