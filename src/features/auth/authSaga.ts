import { call, take, delay, put } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { fork } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";
import { push } from "connected-react-router";
import { useHistory } from 'react-router';

function* handleLogin(payload: LoginPayload) {

  try {
    yield delay(1000);
    localStorage.setItem('access_token', 'fake_token');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'success'
      })
    )
    yield put(push('/dashboard/student'));
    // history.push('/dashboard/student');
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message))
  }
}

function* handleLogout() {

  localStorage.removeItem('access_token');
  yield put(push('/'));
  // redirect to login page
}

function* watchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
    yield fork(handleLogin, action.payload);
    yield take(authActions.logout.type);
    yield call(handleLogout)
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}