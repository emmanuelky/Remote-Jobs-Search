import initialState from '../store'

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_JOB_TO_FAVOURITE':
            return {
                ...state,
                favourites: [...state.user.favourites, action.payload]
            }
    }
}