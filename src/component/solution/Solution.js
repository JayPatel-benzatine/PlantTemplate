import React, { useEffect } from 'react'
import './Solution.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Solution = () => {
    const now = 75;
    const nows = 45;
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='solution py-5'>
            <Container>
                <Row>
                    <Col xs={12} md={6} data-aos="fade-right">
                        <div className="sol_img text-center">
                            <img src={require('../../assets/p.jpeg')} alt="" className=' img-fluid' />
                        </div>
                    </Col>
                    <Col xs={12} md={6} data-aos="fade-left">
                        <div className="sol_detail">
                            <h1 >away from polltion,towards solution</h1>
                            <p className=' text-muted fst-italic my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero sequi sint officia expedita eum ut rerum provident dolores, facilis neque explicabo nostrum aperiam magnam asperiores, corrupti enim quos non.</p>
                            <div className="pro mb-3">
                                <div className="d-flex justify-content-between px-2 py-3">
                                    <h4 className=' text-capitalize'>go green campaign</h4>
                                    <span>{now} %</span>
                                </div>
                                <ProgressBar animated now={now}
                                    style={{ height: '10px' }}
                                    variant="success" label={`${now}%`} visuallyHidden />
                            </div>
                            <div className="pro mb-5">
                                <div className="d-flex justify-content-between px-2 py-3">
                                    <h4 className=' text-capitalize'>energy saving</h4>
                                    <span>{now} %</span>
                                </div>
                                <ProgressBar animated now={nows}
                                    style={{ height: '10px' }}
                                    variant="success" label={`${nows}%`} visuallyHidden />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Solution