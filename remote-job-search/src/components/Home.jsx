import React, { useState, useEffect } from 'react'
import MyNavBar from './MyNavBar'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToFavourite, removeFromFavourite } from '../actions'


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    addJobToFavourite: (joblist) => dispatch(addToFavourite(joblist)),

})



const Home = ({ addJobToFavourite }) => {
    const [jobs, setJobs] = useState([])


    useEffect(() => {
        fetchJobs()
    }, [])

    const fetchJobs = async () => {
        try {

            const res = await axios.get('https://strive-jobs-api.herokuapp.com/jobs?limit=20&skip=10 ', {
                headers: {
                    Authorization:
                        " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM3Mjk5YmIwMWIwZDAwMTUxNjY5MDQiLCJpYXQiOjE2MzEwMDUwODMsImV4cCI6MTYzMjIxNDY4M30.yJM7cebFnDP0ayfuxT3X6Wl47Nhme9pIbmgYBPwhViM",
                },
            })

            console.log(res.data.data)
            setJobs(res.data.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>

            <div className="d-flex flex-wrap mx-5 my-5 justify-content-center rounded">
                {
                    jobs?.map((job, i) => (<>
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

                                    <Button variant="primary" className="text-center">View</Button>

                                    <div onClick={() => addJobToFavourite(job)} style={{ fontSize: '30px', cursor: 'pointer' }}>
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