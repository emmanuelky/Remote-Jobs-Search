import axios from 'axios'



export const addToFavourite = (joblist) => ({
    type: 'ADD_JOB_TO_FAVOURITE',
    payload: joblist,
})

export const removeFromFavourite = (removejob) => ({
    type: 'REMOVE_JOB_FROM_FAVOURITE',
    payload: removejob
})

export const showJobsList = () => {

    return async (dispatch, getState) => {
        try {

            const res = await axios.get('https://strive-jobs-api.herokuapp.com/jobs?limit=20&skip=10 ', {
                headers: {
                    Authorization:
                        " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM3Mjk5YmIwMWIwZDAwMTUxNjY5MDQiLCJpYXQiOjE2MzEwMDUwODMsImV4cCI6MTYzMjIxNDY4M30.yJM7cebFnDP0ayfuxT3X6Wl47Nhme9pIbmgYBPwhViM",
                },
            })
            const jobs = res.data.data
            console.log(res.data.data)
            dispatch({
                type: 'SHOW_JOBS_LISTINGS',
                payload: jobs
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}