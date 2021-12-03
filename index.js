import React from 'react';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import axios from 'axios';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-native-styled-toast';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { store } from './redux/store';
import theme from './theme';

axios.defaults.baseURL = 'http://localhost:9001';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

const ProviderApp = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ToastProvider>
                <App />
            </ToastProvider>
        </ThemeProvider>
    </Provider>
);

registerRootComponent(ProviderApp);
