import { initialState } from '../store'

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_JOB_TO_FAVOURITE':
            return {
                ...state,
                user: {
                    ...state.user,
                    favourites: [...state.user.favourites, action.payload]
                }
            }
        case 'REMOVE_JOB_FROM_FAVOURITE':
            return {
                ...state,
                user: {
                    ...state.user,
                    favourites: [...state.user.favourites.filter((job, i) => i !== action.payload)]
                }
            }
        default:
            return state
    }
}

export default rootReducer