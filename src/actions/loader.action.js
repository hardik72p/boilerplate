const action = {
  CHANGE_LOADER_STATE: 'CHANGE_LOADER_STATE',

  changeLoaderState: (payload) => ({
    type: action.CHANGE_LOADER_STATE,
    payload,
  }),
};

export default action;
