import { takeLatest } from '@redux-saga/core/effects';
import { call, take, delay, put } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { fork } from "redux-saga/effects";
import { studentActions } from "./studentSlice";
import { push } from "connected-react-router";
// import studentApi from 'api/studentApi';
// import { ListParams, ListResponse, Student } from 'models';

// 


export default function* studentSaga() {
  // yield takeLatest(studentActions.fetchStudentList, fetchStudentList);
}