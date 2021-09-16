import { initialState } from '../store'

const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case 'ADD_JOB_TO_FAVOURITE':
            return {
                ...state,
                favourites: [...state.favourites, action.payload]

            }
        case 'REMOVE_JOB_FROM_FAVOURITE':
            return {
                ...state,
                favourites: [...state.favourites.filter((job, i) => job._id !== action.payload)]
            }

        default:
            return state
    }
}

export default userReducer