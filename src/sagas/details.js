import { takeLatest, put, spawn, debounce, retry } from "redux-saga/effects";
import { detailFailure, detailRequest, detailResult } from "../actions/actionCreator";
import { DETAIL_CHOICE, DETAIL_REQUEST } from "../actions/actionTypes";
import { searchRequestData } from "../api/searchApi";

function transformationChoice({type, payloads}) {
  return type === DETAIL_CHOICE && Number(payloads.choice) !== 0;
}
// worker
function* handelChoiceSaga(action) {
  yield put(detailRequest(action.payloads.choice))
}
// watcher
function* watchChangeChoiceSaga() {
  yield debounce(300, transformationChoice, handelChoiceSaga);
}
// worker
function* handelDetailSaga(action) {
  try {
    const retryCount = 3;
    const retryDelay = 1 * 1000; //ms
    const data = yield retry(retryCount, retryDelay, searchRequestData, action.payloads.choice);
    yield put(detailResult(data));
  } catch(e) {
    yield put(detailFailure(e.message));
  }
}
// watcher
function* watchGetDataSaga() {
  yield takeLatest(DETAIL_REQUEST, handelDetailSaga);
}

export default function* sagaDetails() {
  yield spawn(watchChangeChoiceSaga);
  yield spawn(watchGetDataSaga);
}
