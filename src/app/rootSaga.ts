import { all } from 'redux-saga/effects';
import authSaga from 'src/features/auth/authSaga';
import counterSaga from 'src/features/counter/counterSaga';
import dashboardSaga from 'src/features/dashboard/dashboardSaga';
import studentSaga from 'src/features/student/studentSaga';


export default function* rootSaga() {
  yield all([counterSaga(), authSaga(), studentSaga(), dashboardSaga()]);  
}