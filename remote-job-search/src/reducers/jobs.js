import { initialState } from '../store'

const jobsReducer = (state = initialState.Jobs, action) => {
    switch (action.type) {
        case 'SHOW_JOBS_LISTINGS':
            return {
                ...state,
                jobslists: action.payload

            }
        default:
            return state
    }
}

export default jobsReducer