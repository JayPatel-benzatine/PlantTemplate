import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './contact.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Contacts = () => {
  useEffect(() => {
    AOS.init({duration:2000});
},[])
  return (
    
      <Container className='cbs'>
        <div className="cbs_details" data-aos="fade-up">
          <h1 data-aos="fade-up"> contact us</h1>
          <p data-aos="fade-up" data-aos-delay="1000">sustainable living means a successful life.</p>
        </div>
      </Container>
  
  )
}

export default Contacts