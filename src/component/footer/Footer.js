import React, { useEffect } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './fotter.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='fd py-5'>
            <div className='container footer_main'>
                <div className="fotter_left" data-aos="fade-left">
                    <img src={require('../../assets/blogo.png')} className='img-fluid mb-2' alt="" />
                    <p className='text-muted mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, cupiditate, voluptatib</p>
                    <div className="iconss">
                        <FacebookIcon className='me-2' />
                        <TwitterIcon className='me-2' />
                        <InstagramIcon className='me-2' />
                    </div>
                </div>
                <div className="fotter_middle" data-aos="fade-up">
                    <div className="mid_head text-capitalize my-2">useful links</div>
                    <div className="lists_mid">
                        <ul>
                            <li>No Water, No Life</li>
                            <li>Kick the CO2 Habit.</li>
                            <li>Never refuse to reuse</li>
                            <li>Serve to Conserve.</li>
                            <li>What Would Nature Do?</li>
                        </ul>
                    </div>
                </div>
                <div className="fotter_middle  text-center" data-aos="fade-right">
                    <div className="mid_head text-capitalize my-2">our offices</div>
                    <div className="lists_mid">
                        <div className="mapss px-4">
                            <img src={require('../../assets/map.png')}
                                className=' img-fluid'
                                alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer