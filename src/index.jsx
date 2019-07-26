import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import rootReducer from './reducers/index';
// import { HashRouter } from 'react-router-dom';
// import App from './components/App';

// // const store = createStore(rootReducer);

// const render = (Component) => {
//   ReactDOM.render(
//     <div>
//       <HashRouter>
//         <Component />
//       </HashRouter>
//     </div>,
//     document.getElementById('react-app-root')
//   );
// };

// render(App);