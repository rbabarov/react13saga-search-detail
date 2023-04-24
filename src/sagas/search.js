import { takeLatest, put, spawn, debounce, retry } from "redux-saga/effects";
import { searchFailur, searchRequest, searchResult } from "../actions/actionCreator";
import { CHANGE_FIELD, SEARCH_REQUEST } from "../actions/actionTypes";
import { searchRequestData } from '../api/searchApi';

function filterChangeField({ type, payload}) {
  return type === CHANGE_FIELD && payload.search.trim() !== '';
}
// worker
function* hendleChangeFieldSaga(action) {
  yield put(searchRequest(action.payload.search));
}
// watcher
function* watchChangeFieldSaga() {
  yield debounce(500, filterChangeField, hendleChangeFieldSaga);
}
// worker
function* hendelSearchSaga(action) {
  try {
    const retryCount = 3;
    const retryDelay = 1 * 1000; //ms
    const data = yield retry(retryCount, retryDelay, searchRequestData, action.payload.search);
    yield put(searchResult(data));
  } catch(e) {
    yield put(searchFailur(e.message));
  }
}
// watcher
function* watchPostDataSaga() {
  yield takeLatest(SEARCH_REQUEST, hendelSearchSaga);
}

export default function* sagaSearch() {
  yield spawn(watchChangeFieldSaga);
  yield spawn(watchPostDataSaga);
}
