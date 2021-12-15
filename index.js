import React from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import axios from 'axios';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastProvider } from 'react-native-styled-toast';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { store, persistor } from './redux/store';
import theme from './theme';

axios.defaults.baseURL = 'http://localhost:9001';
// LogBox.ignoreAllLogs(); // hide notifications

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

const ProviderApp = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ThemeProvider theme={theme}>
                <ToastProvider>
                    <App />
                </ToastProvider>
            </ThemeProvider>
        </PersistGate>
    </Provider>
);

registerRootComponent(ProviderApp);
