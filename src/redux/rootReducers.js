import { combineReducers } from 'redux'
import CountReduce from './reducers/countReduce'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  CountReduce
});

export default rootReducer;