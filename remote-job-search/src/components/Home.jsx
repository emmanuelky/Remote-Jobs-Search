import React, { useState, useEffect } from 'react'
import MyNavBar from './MyNavBar'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToFavourite, removeFromFavourite, showJobsList } from '../actions'
import Loader from '../components/Loader'



const mapStateToProps = (state) => ({
    jobs: state.Jobs.jobslists,
})

const mapDispatchToProps = (dispatch) => ({
    addJobToFavourite: (joblist) => dispatch(addToFavourite(joblist)),
    fetchJobs: () => dispatch(showJobsList()),


})

const Home = ({ addJobToFavourite, fetchJobs, jobs }) => {
    // const [jobs, setJobs] = useState([])
    // const [loader, setLoader] = useState(true)


    useEffect(() => {
        fetchJobs()
    }, [])

    // const fetchJobs = async () => {

    // }

    return (
        <>
            <div className="d-flex flex-wrap mx-5 my-5 justify-content-center rounded">
                {/* {loader && <Loader />} */}
                {jobs?.map((job, i) => (<>
                    <Card style={{ width: '18rem' }} className='m-3 shadow-sm' >
                        {/* {console.log(job)} */}
                        {/* <Card.Img variant="top" src={job.company_logo_url} className='img-fluid' /> */}
                        <Card.Body>
                            <Link to="/company-detail">
                                <Card.Title>{job.title} - <i>{job.job_type}</i> </Card.Title>
                            </Link>
                            <Card.Text>
                                by  {job.company_name} - {job.candidate_required_location}
                            </Card.Text>
                            <div className='d-flex justify-content-between' >

                                <Link to='/company-detail'>
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