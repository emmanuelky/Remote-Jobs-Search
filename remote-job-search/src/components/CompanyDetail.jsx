import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCompanyDetail } from '../actions'
import { useParams, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Button, Form, FormControl } from 'react-bootstrap'
import { format, parseISO } from "date-fns";



const CompanyDetail = ({ history, location, match, }) => {

    const companyDetails = useSelector(state => state.Jobs.companydetail)



    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getCompanyDetail(id))
    }, [])

    const fixDate = (date) => {

        return format(parseISO(date), "dd.MM.yyyy");
        // MM/dd/yyyy
    }

    const removeHtml = (myString) => {
        return myString.replace(/<[^>]*>?/gm, '')
    }

    return (
        <div className="flex flex-col align-items-center">

            {companyDetails?.map(company => (
                <>
                    <div className='hover:shadow-sm sm:mx-2 my-2  m-4 rounded backdrop-blur-3xl  ' >

                        <div className=" flex backdrop-filter flex-col my-4 to-transparent text-center mx-20 ">


                            <h3 >{company.company_name}</h3>
                            <h5>
                                {company.candidate_required_location}
                            </h5>
                            <h4 className="my-4">
                                {company.title} -
                                <i> {company.job_type} </i>
                            </h4>
                            <h6 className='text-justify '>

                                {removeHtml(company.description)}
                            </h6>
                            <a href={company.url} target="_blank">
                                <Button variant="outline-primary" size="sm" className="w-1/6 mx-auto my-4">Apply</Button>
                            </a>
                            <span className="mx-10">
                                <i className='text-muted'>posted -</i> {fixDate(company.publication_date)}

                            </span>



                        </div>


                    </div>
                </>
            ))}
        </div>
    )

}

export default withRouter(CompanyDetail);