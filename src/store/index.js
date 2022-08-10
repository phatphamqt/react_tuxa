import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './rootReducer'


const middlewares = applyMiddleware(reduxThunk)

const store = createStore(rootReducer,middlewares)

export default store;