import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { removeFromFavourite } from '../actions'
import { useSelector, useDispatch } from 'react-redux'


const MyFavouriteJobs = ({ history, location }) => {

    const dispatch = useDispatch()

    const myJobs = useSelector(state => state.user.favourites)
    console.log(myJobs)


    return (<div div className="bg-pink-50 h-screen w-screen">
        <div className="sticky-top mt-2">
            <h4 className="text-center mt-5">My Jobs</h4>
        </div>
        <div className="d-flex flex-wrap mx-5 my-5 justify-content-center rounded ">
            {myJobs.length > 0 ?
                myJobs?.map((job, i) => (<>
                    <Card style={{ width: '18rem' }} className='m-3 shadow-sm' >
                        <Card.Body>
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
                                <div onClick={() => dispatch(removeFromFavourite(job._id))} style={{ fontSize: '20px', cursor: 'pointer' }}>
                                    <i class="far fa-trash-alt text-danger"></i>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                </>)) : <div>
                    <span>Add your favourite jobs here!</span>
                </div>
            }
        </div>
    </div>)
}

export default MyFavouriteJobs
