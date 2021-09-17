import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCompanyDetail } from '../actions'
import { useParams, withRouter } from 'react-router-dom'


const CompanyDetail = ({ job, history, location, match, fetchCompanyDetails }) => {

    useEffect(() => {
        fetchCompanyDetails()
    }, [])

    const { id } = useParams()

    // const url = window.location.pathname
    console.log(window.location.pathname)

}

export default withRouter(CompanyDetail);