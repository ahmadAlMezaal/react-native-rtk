import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { MoviesList } from '../components/movieList.component';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { availableMovies } from '../db/localdb';
import { ThemeSwitch } from '../components/notificationsSwitch.component';

export const HomeScreen: React.FC = () => {

    const [activeTab, setActiveTab] = useState<string>('All');

    const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);

    const favoriteMovies = useSelector((state: RootState) => state.movies.favoriteMovies);
    const displayedMovies = activeTab === 'All' ? availableMovies : Object.values(favoriteMovies);

    const backgroundColor = isDarkTheme ? '#505050' : '#FFFFFF';


    return <View style={[styles.container, { backgroundColor }]}>
        <ThemeSwitch />
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
        <MoviesList movies={displayedMovies} />
    </View>;
};

const styles = StyleSheet.create(
    {
        container: {
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
