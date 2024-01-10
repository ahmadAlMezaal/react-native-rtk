import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './store';
import MoviesList from './src/components/movieList.component';

const App = (): React.JSX.Element => {

    return <View style={styles.container}>
        <Provider store={store}>
            <MoviesList />
        </Provider>
    </View>;
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingTop: 66,
        },
    }
);

export default App;
