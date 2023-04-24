import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_RESULT, CHANGE_FIELD } from '../actions/actionTypes';

const stateSearch = {
  item: [],
  loading: false,
  error: null,
  search: ''
}

export default function skillsSearch(state = stateSearch, action) {

  switch(action.type) {
    case CHANGE_FIELD:
      const { search } = action.payload;
      return {...state.state, search};
    case SEARCH_REQUEST:
      return { ...state, loading: true, error: null};
    case SEARCH_RESULT:
      const { item } = action.payload;
      return { ...state, item, loading: false, error: null};
    case SEARCH_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error }
    default: return state ;
  }
}
