import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import * as serviceWorker from './serviceWorker';

// const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

    // <Provider>
        // </Provider>,
