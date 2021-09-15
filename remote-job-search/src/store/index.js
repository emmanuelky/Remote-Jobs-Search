import { createStore } from 'redux'
import rootReducer from '../reducers/'

export const initialState = {
    user: {
        favourites: [],
    }
}
const store = createStore(rootReducer, initialState, process.env.REACT_APP_DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store