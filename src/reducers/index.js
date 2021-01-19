import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Loader from './loader.reducer';
import { publicReducer } from './public.reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  Loader,
  public: publicReducer,
});

export default rootReducer;
