import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { toggleTheme } from '../features/theme.slice';

export const ThemeSwitch: React.FC = () => {
    const isDarkThemeApplied = useSelector((state: RootState) => state.theme.isDarkTheme);
    const dispatch = useDispatch();

    return <View style={styles.container}>
        <Text style={styles.text}>App Theme: {isDarkThemeApplied ? 'Dark' : 'Light'}</Text>
        <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkThemeApplied ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={() => dispatch(toggleTheme())}
            value={isDarkThemeApplied}
        />
    </View>;
};

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
        },
        text: {
            marginRight: 10,
            fontSize: 16,
            color: 'black',
        },
    }
);
