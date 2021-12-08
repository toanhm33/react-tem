import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import './assets/styles/_variants.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'src/utils';

const queryClient = new QueryClient();
ReactDOM.render(
  <Provider store={store}>
    {/* <QueryClientProvider client={queryClient}> */}
    <ConnectedRouter history={history}>
      <Suspense fallback={<div></div>}>
        <App />
      </Suspense>
    </ConnectedRouter>
    {/* </QueryClientProvider> */}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
