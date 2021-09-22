import axios from 'axios'



export const addToFavourite = (joblist) => ({
    type: 'ADD_JOB_TO_FAVOURITE',
    payload: joblist,
})

export const removeFromFavourite = (removejob) => ({
    type: 'REMOVE_JOB_FROM_FAVOURITE',
    payload: removejob
})

export const showJobsList = (jobSearch) => {

    // jobSearch.toLowerCase()
    return async (dispatch, getState) => {

        const baseUrl = 'https://strive-jobs-api.herokuapp.com/jobs'

        try {

            const res = await axios.get(jobSearch ? baseUrl + '?search=' + jobSearch + '&limit=20&skip=200' : baseUrl + '?limit=20&skip=200', {
                headers: {
                    Authorization:
                        " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM3Mjk5YmIwMWIwZDAwMTUxNjY5MDQiLCJpYXQiOjE2MzEwMDUwODMsImV4cCI6MTYzMjIxNDY4M30.yJM7cebFnDP0ayfuxT3X6Wl47Nhme9pIbmgYBPwhViM",
                },
            })
            const jobs = res.data.data
            // console.log(res.data.data)

            dispatch({
                type: 'SHOW_JOBS_LISTINGS',
                payload: jobs
            })

            dispatch({
                type: 'HANDLE_PAGE_LOAD',
            })





        }
        catch (err) {
            console.log(err)
        }
    }
}

export const getCompanyDetail = (companyName) => {

    return async (dispatch, getState) => {

        const baseUrl = 'https://strive-jobs-api.herokuapp.com/jobs'

        try {

            const res = await axios.get(baseUrl + '?company=' + companyName, {
                headers: {
                    Authorization:
                        " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM3Mjk5YmIwMWIwZDAwMTUxNjY5MDQiLCJpYXQiOjE2MzEwMDUwODMsImV4cCI6MTYzMjIxNDY4M30.yJM7cebFnDP0ayfuxT3X6Wl47Nhme9pIbmgYBPwhViM",
                },
            })
            const company = res.data.data
            // console.log(res.data.data)
            dispatch({
                type: 'SHOW_COMPANY_DETAIL',
                payload: company
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}