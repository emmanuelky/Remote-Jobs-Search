import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import rootReducer from '../reducers/jobs'
import thunk from 'redux-thunk'
import userReducer from '../reducers/user'
import jobsReducer from '../reducers/jobs'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import storageSession from 'redux-persist/lib/storage/session'
import { encryptTransform } from 'redux-persist-transform-encrypt'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__


export const initialState = {
    user: {
        favourites: [],
    },
    Jobs: {
        jobslists: [],
    }
}

const persistConfig = {
    key: '/',
    storage
}

const allReducers = combineReducers({
    user: userReducer,
    Jobs: jobsReducer
})

const persistAllReducers = persistReducer(
    persistConfig, allReducers
)




export const store = createStore(persistAllReducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)