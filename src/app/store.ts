import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import authReducer from 'src/views/auth/authSlice';
import studentReducer from 'src/views/Student/studentSlice';
import dashboardReducer from 'src/views/Dashboard/dashboardSlice';
import { history } from 'src/utils';

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  student: studentReducer,
  dashboard: dashboardReducer
});

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware).concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
