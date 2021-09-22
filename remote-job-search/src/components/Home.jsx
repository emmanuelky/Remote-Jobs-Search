import React, { useState, useEffect } from 'react'
import MyNavBar from './MyNavBar'
import axios from 'axios'
import { Card, Button, Form, FormControl, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToFavourite, removeFromFavourite, showJobsList } from '../actions'
import Loader from '../components/Loader'
import { useSelector, useDispatch } from 'react-redux'


const Home = ({ history, location }) => {

    const dispatch = useDispatch()

    const jobs = useSelector(state => state.Jobs.jobslists)
    const favourites = useSelector(state => state.user.favourites)
    const loading = useSelector(state => state.Jobs.loading)


    const favJob = favourites.map((favourite) => favourite._id)

    useEffect(() => {
        dispatch(showJobsList())
    }, [])


    const toggleFavourite = (job) => {
        if (favJob.find(el => el === job._id)) {
            dispatch(removeFromFavourite(job._id))
        } else {
            dispatch(addToFavourite(job))
        }
    }

    return (

        <>
            <div className=" flex justify-center mb-4 mt-5 sticky-top ">
                <Form className="flex w-1/1 justify-center mt-3">
                    <FormControl
                        type="text"
                        placeholder="Search e.g frontend or by company name... "
                        className="mr-2"
                        aria-label="Search"
                        onKeyUp={(e) => dispatch(showJobsList(e.target.value.toLowerCase()))}
                    />
                    <Button variant="outline-success" onClick={() => dispatch(showJobsList())}>Search</Button>
                </Form>
            </div>


            <div className="flex flex-wrap container-full  justify-center ">

                {loading
                    ? <Spinner animation="border" variant="primary" />
                    : jobs?.map((job, i) => (<>
                        <Card className='w-1/5 hover:shadow-sm sm:mx-2 my-2  rounded backdrop-blur-3xl  ' >
                            <Card.Body className=" backdrop-filter bg-pink-100  to-transparent hover:bg-white bg-gradient-to-tr from-white   ">
                                <div className=" text-right ">
                                    <i
                                        className={favourites.find(j => j._id === job._id) ? 'fas fa-heart text-danger ' : 'far fa-heart text-warning'}
                                        onClick={() => toggleFavourite(job)}
                                    ></i>
                                </div>
                                <Link to={`/${job.company_name}`}>
                                    <Card.Title>{job.title} - <i>{job.job_type}</i> </Card.Title>
                                </Link>
                                <Card.Text>
                                    by  {job.company_name.toLowerCase()} - {job.candidate_required_location}

                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </>))
                }


            </div>


        </>
    )
}

export default Home