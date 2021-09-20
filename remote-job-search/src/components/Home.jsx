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
    // favJob: state.user.favourites.map(f => (f.company_name)),
    favourites: state.user.favourites

})

const mapDispatchToProps = (dispatch) => ({
    addJobToFavourite: (joblist) => dispatch(addToFavourite(joblist)),
    fetchJobs: (query) => dispatch(showJobsList(query)),
    removeJobFromFavourite: (removejob) => dispatch(removeFromFavourite(removejob))
})

const Home = ({ addJobToFavourite, fetchJobs, jobs, favJob, favourites, removeJobFromFavourite }) => {


    useEffect(() => {

        fetchJobs()
    }, [])


    return (

        <>
            <div className=" flex justify-center mb-4 mt-5 ">
                <Form className="flex w-1/1 justify-center">
                    <FormControl
                        type="text"
                        placeholder="Search e.g frontend or by company name... "
                        className="mr-2"
                        aria-label="Search"
                        onKeyUp={(e) => fetchJobs(e.target.value)}
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>


            <div className="flex flex-wrap container-full  justify-center ">

                {jobs?.map((job, i) => (<>
                    <Card className='w-1/5 hover:shadow-md sm:mx-2 my-2 rounded  ' >
                        <Card.Body className=" backdrop-filter backdrop-blur-3xl hover:bg-pink-100 bg-gradient-to-tr from-gray-200 to-transparent bg-opacity-20">
                            <Link to={`/${job.company_name}`}>
                                <Card.Title>{job.title} - <i>{job.job_type}</i> </Card.Title>
                            </Link>
                            <Card.Text>
                                by  {job.company_name} - {job.candidate_required_location}
                            </Card.Text>
                            <div className='flex  pt-2 justify-around'>

                                <div>
                                    <Link to={`/${job.company_name}`}>
                                        <button variant="primary" className="text-center">View</button>
                                    </Link>
                                </div>

                                <button type='button'>
                                    <i
                                        className='far fa-star'
                                        onClick={() => addJobToFavourite(job)}
                                    ></i>

                                </button>


                                {/* {<div>
                                    <button type='button'>
                                        <i
                                            className={favourites.find((j) => j === j.id) ? 'far fa-star' : 'fas fa-star'}
                                            onClick={() => favourites.find((j) => j === j.id) ? removeJobFromFavourite(job) : addJobToFavourite(job)}
                                        ></i>

                                    </button>
                                </div>} */}

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