import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './c.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cform = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <Container className='p-5'>
            <div className="f_head" data-aos="fade-up" data-aos-delay="1000">
                <h1>get involved</h1>
                <p className=' text-muted'>play bt the rules,recycle and reuses</p>
            </div>
            <div className="forms_cbs py-5" data-aos="flip-left" data-aos-delay="1000">
                <Form>
                    <Row>
                        <Col xs={12} md={6} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="tel" placeholder="Phone" />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder='Message' />
                    </Form.Group>
                    <Button className='btns' type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    )
}

export default Cform