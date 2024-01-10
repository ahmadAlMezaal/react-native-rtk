import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { HomeScreen } from './src/screens/home.screen';

const App: React.FC = () => {

    return <View style={styles.container}>
        <Provider store={store}>
            <HomeScreen />
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
