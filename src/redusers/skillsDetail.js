import { DETAIL_CHOICE, DETAIL_REQUEST, DETAIL_RESULT, DETAIL_FAILURE } from '../actions/actionTypes';

const stateDet = {
  data: {},
  loading: false,
  error: null,
  choice: 0
}
export default function skillsDetail(state = stateDet, action) {
  switch(action.type) {
    case DETAIL_CHOICE:
      const { choice } = action.payloads;
      return { ...state, choice};
    case DETAIL_REQUEST:
      return { ...state, loading: true, error: null};
    case DETAIL_RESULT:
      const { data } = action.payloads;
      return { ...state, data, loading: false, error: null, choice: 0};
    case DETAIL_FAILURE:
      const { error } = action.payloads;
      return { ...state, loading: false, error};
    default: return stateDet;
  }
}
