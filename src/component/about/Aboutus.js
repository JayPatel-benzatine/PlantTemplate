import React from 'react'
import { Container } from 'react-bootstrap'
import './about.scss'

const Aboutus = () => {
    return (
        <div>
            <Container className='abs'>
                <div className="abs_detail">
                    <h1 className=' text-capitalize'>about us</h1>
                    <h5 className=' text-capitalize'>sustainable living means a successfull life.</h5>
                </div>
            </Container>
        </div>
    )
}

export default Aboutus