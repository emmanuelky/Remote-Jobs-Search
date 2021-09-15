export const addToFavourite = (joblist) => ({
    type: 'ADD_JOB_TO_FAVOURITE',
    payload: joblist,
})

export const removeFromFavourite = (removejob) => ({
    type: 'REMOVE_JOB_FROM_FAVOURITE',
    payload: removejob
})