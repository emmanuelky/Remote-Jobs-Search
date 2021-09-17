import React, { useState, useEffect } from 'react'
import MyNavBar from './MyNavBar'
import axios from 'axios'
import { Card, Button, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToFavourite, removeFromFavourite, showJobsList } from '../actions'
import Loader from '../components/Loader'



const mapStateToProps = (state) => ({
    jobs: state.Jobs.jobslists,
})

const mapDispatchToProps = (dispatch) => ({
    addJobToFavourite: (joblist) => dispatch(addToFavourite(joblist)),
    fetchJobs: (query) => dispatch(showJobsList(query)),

})

const Home = ({ addJobToFavourite, fetchJobs, jobs, }) => {


    useEffect(() => {
        fetchJobs()
    }, [])

    return (
        <>

            <div className="d-flex mx-5 mt-5 mb-1 justify-content-center">
                <Form className="d-flex w-50">
                    <FormControl
                        type="text"
                        placeholder="Job Search e.g frontend or by company name... "
                        className="mr-2"
                        aria-label="Search"
                        onKeyUp={(e) => fetchJobs(e.target.value)}
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>

            <div className="d-flex flex-wrap mx-5 mb-5 mt-3 justify-content-center rounded ">
                {jobs?.map((job, i) => (<>
                    <Card style={{ width: '18rem' }} className='hover:shadow-2xl sm:mx-2' >
                        <Card.Body className="">
                            <Link to={`/${job.company_name}`}>
                                <Card.Title>{job.title} - <i>{job.job_type}</i> </Card.Title>
                            </Link>
                            <Card.Text>
                                by  {job.company_name} - {job.candidate_required_location}
                            </Card.Text>
                            <div className='d-flex justify-content-between' >

                                <Link to={`/${job.company_name}`}>
                                    <Button variant="primary" className="text-center">View</Button>
                                </Link>
                                <div onClick={() => addJobToFavourite(job)} style={{ fontSize: '20px', cursor: 'pointer' }}>
                                    <i class="fas fa-heart text-warning"  ></i>
                                </div>


                            </div>
                        </Card.Body>
                    </Card>

                </>))
                }
            </div>


        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)