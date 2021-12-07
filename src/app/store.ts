import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import authReducer from 'src/features/auth/authSlice';
import studentReducer from 'src/features/student/studentSlice';
import dashboardReducer from 'src/features/dashboard/dashboardSlice';
import { history } from 'src/utils';

const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
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
