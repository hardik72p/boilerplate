import actions from '../actions/loader.action'

const initialState = {
  isLoader: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_LOADER_STATE:
      return { isLoader: action.payload };
    default:
      return state;
  }
}