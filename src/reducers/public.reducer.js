import { SET_PATHNAME, PREV_CLIENT, SET_NAVBAR } from '../actions/actionTypes';

const initialState = {
  locationObj: {
    prevPathname: null,
    currentPathname: null,
  },
  prevClient: {},
  visible: true,
};

export const publicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PATHNAME:
      return { ...state, locationObj: action.payload };
    case PREV_CLIENT:
      return { ...state, prevClient: action.payload };
    case SET_NAVBAR:
      return { ...state, visible: action.payload };
    default:
      return state;
  }
};
