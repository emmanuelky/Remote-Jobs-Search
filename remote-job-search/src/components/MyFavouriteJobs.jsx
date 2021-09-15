import React from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const mapStateToProps = (state) => ({
    jobs: state.user.favourites,
})

const mapDispatchToProps = (dispatch) => ({ dispatch })

const MyFavouriteJobs = ({ jobs }) => {
    console.log(jobs)
    return (
        <div className="d-flex flex-wrap mx-5 my-5 justify-content-center rounded">
            <h4>My Favorite Jobs</h4>
            {
                jobs?.map((job, i) => (<>
                    <Card style={{ width: '18rem' }} className='m-3 shadow-sm' >
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

                            </div>
                        </Card.Body>
                    </Card>

                </>))
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFavouriteJobs)
