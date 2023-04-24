import {
  SEARCH_FAILURE,
  SEARCH_REQUEST,
  SEARCH_RESULT,
  CHANGE_FIELD,
  
  DETAIL_CHOICE,
  DETAIL_REQUEST,
  DETAIL_RESULT,
  DETAIL_FAILURE 
} from "./actionTypes";

export const searchFailur = error => ({ type: SEARCH_FAILURE, payload: { error } });
export const searchRequest = search => ({ type: SEARCH_REQUEST, payload: { search } });
export const searchResult  = item => ({ type: SEARCH_RESULT, payload: { item } });
export const changeField = search => ({ type: CHANGE_FIELD, payload: { search } });

export const detailChoice = choice => ({ type: DETAIL_CHOICE, payloads: { choice } });
export const detailRequest = choice => ({ type: DETAIL_REQUEST,payloads: { choice } });
export const detailResult = data => ({ type: DETAIL_RESULT, payloads: { data } });
export const detailFailure = error => ({ type: DETAIL_FAILURE, payloads: { error } });
