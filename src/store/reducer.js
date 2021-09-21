import {
  FETCH_MENU_REQUEST,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE,
  FETCH_MENU_POST,
} from "./actions";

const initialState = {
  dishList: [],
  text: '',
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU_REQUEST:
      return { ...state};
    case FETCH_MENU_SUCCESS:
      return { ...state, dishList: action.dishList };
    case FETCH_MENU_FAILURE:
      return { ...state, error: action.payload };
    case FETCH_MENU_POST:
      return { ...state, shows: action.payload };
    default:
      return state;
  }
};

export default reducer;