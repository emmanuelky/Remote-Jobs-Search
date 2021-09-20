import React from 'react'
// import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { removeFromFavourite } from '../actions'
import { useSelector, useDispatch } from 'react-redux'



// const mapStateToProps = (state) => ({
//     jobs: state.user.favourites,
// })

// const mapDispatchToProps = (dispatch) => ({
//     removeJobFromFavourite: (removejob) => dispatch(removeFromFavourite(removejob))
// })

const MyFavouriteJobs = ({ history, location }) => {



    const dispatch = useDispatch()


    const jobs = useSelector(state => state.user.favourites)

    return (<>
        <h4 className="text-center">My Favorite Jobs</h4>
        <div className="d-flex flex-wrap mx-5 my-5 justify-content-center rounded">
            {
                jobs?.map((job, i) => (<>
                    <Card style={{ width: '18rem' }} className='m-3 shadow-sm' >
                        {/* <Card.Img variant="top" src={job.company_logo_url} className='img-fluid' /> */}
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

                </>))
            }
        </div>
    </>)
}

export default MyFavouriteJobs
