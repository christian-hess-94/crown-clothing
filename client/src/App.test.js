import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

test('React is rendered', () => {
    const { baseElement } = render(
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
    //   const linkElement = getByText(/learn react/i);
    expect(baseElement).toBeInTheDocument();
});
