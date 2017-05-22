import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//import likes from './likes';
import people from './people';
import paging from './paging';

const rootReducer = combineReducers({people, paging, routing: routerReducer });

export default rootReducer;
