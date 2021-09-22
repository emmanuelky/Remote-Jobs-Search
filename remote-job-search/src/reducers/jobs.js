import { initialState } from '../store'

const jobsReducer = (state = initialState.Jobs, action) => {
    switch (action.type) {
        case 'SHOW_JOBS_LISTINGS':
            return {
                ...state,
                jobslists: action.payload

            }

        case 'SHOW_COMPANY_DETAIL':
            return {
                ...state,
                companydetail: action.payload
            }

        case 'HANDLE_PAGE_LOAD':
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}

export default jobsReducer