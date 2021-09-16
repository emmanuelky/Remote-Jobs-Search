import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import rootReducer from '../reducers/jobs'
import thunk from 'redux-thunk'
import userReducer from '../reducers/user'
import jobsReducer from '../reducers/jobs'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__


export const initialState = {
    user: {
        favourites: [],
    },
    Jobs: {
        jobslists: [],
    }
}

const allReducers = combineReducers({
    user: userReducer,
    Jobs: jobsReducer
})


const store = createStore(allReducers,
    initialState,
    process.env.REACT_APP_DEVELOPMENT ? composeEnhancers(applyMiddleware(thunk)) : compose(applyMiddleware(thunk)))

export default store