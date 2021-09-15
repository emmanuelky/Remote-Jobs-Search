import React, { useState, useEffect } from 'react'
import MyNavBar from './MyNavBar'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Home = () => {
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
                        <Link to="/company-detail">
                            <Card style={{ width: '18rem' }} className='m-3 shadow-sm' >
                                {/* <Card.Img variant="top" src={job.company_logo_url} className='img-fluid' /> */}
                                <Card.Body>
                                    <Card.Title>{job.title} - <i>{job.job_type}</i> </Card.Title>
                                    <Card.Text>
                                        by  {job.company_name} - {job.candidate_required_location}
                                    </Card.Text>
                                    <Button variant="primary" className="text-center">View Jobs</Button>
                                </Card.Body>
                            </Card>

                        </Link>
                    </>))
                }
            </div>


        </>
    )
}

export default Home