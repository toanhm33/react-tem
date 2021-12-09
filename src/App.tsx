import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './app/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterComponent />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  );
};

export default App