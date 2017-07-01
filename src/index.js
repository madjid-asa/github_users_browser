import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {loadUsers} from './actions/userActions';


const store = configureStore();
store.dispatch(loadUsers());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
