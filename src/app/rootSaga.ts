import { all } from 'redux-saga/effects';
import authSaga from 'src/views/auth/authSaga';
import dashboardSaga from 'src/views/Dashboard/dashboardSaga';
import studentSaga from 'src/views/Student/studentSaga';


export default function* rootSaga() {
  yield all([authSaga(), studentSaga(), dashboardSaga()]);  
}