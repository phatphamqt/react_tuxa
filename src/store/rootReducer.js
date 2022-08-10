import { combineReducers } from "redux";
import reducerPost from './posts/reducer'
import reducerUser from './users/reducer'

const rootReducer = combineReducers({
  Post: reducerPost,
  User: reducerUser

})

export default rootReducer;