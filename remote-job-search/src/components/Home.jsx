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

            const res = await axios.get('https://remotive.io/api/remote-jobs?limit=20')

            console.log(res.data.jobs)
            setJobs(res.data.jobs)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <MyNavBar jobs={jobs} />
            <div className="d-flex flex-wrap mx-5 my-5 justify-content-center shadow-lg border rounded">
                {
                    jobs?.map((job, i) => (<>
                        <Link to="/company-detail">
                            <Card style={{ width: '18rem' }} className='m-3 shadow-lg' >
                                <Card.Img variant="top" src={job.company_logo_url} className='img-fluid' />
                                <Card.Body>
                                    <Card.Title>{job.company_name}</Card.Title>
                                    <Card.Text>
                                        {job.job_type}
                                    </Card.Text>
                                    <Button variant="primary">View Jobs</Button>
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
