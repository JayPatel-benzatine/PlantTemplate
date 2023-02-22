import React from 'react'
import Container from 'react-bootstrap/Container';
import './hero.scss'
const Hero = () => {
    return (
        <>
            <Container id='hero'>
                <div className="hero_top p-5">
                    <h5 className="animate__animated animate__fadeInUp ">what would nature do ?</h5>
                    <h2 className="animate__animated animate__fadeInUp">green.that's how we'd like the world to be.</h2>
                    <button className='button animate__animated animate__fadeInUp animate__delay-1s'>get involved</button>
                </div>
                <div className="hero_bottom">
                    <div className="wall">
                        <img src={require('../../assets/herobg.jpeg')} alt="" className="animate__animated animate__fadeInUp" />
                        <div className="hero_sub">
                            <div className="clean animate__animated animate__fadeInLeft animate__delay-1s">
                                <img src={require('../../assets/air.png')} alt="" />
                            </div>
                            <div className="tree animate__animated animate__fadeInLeft animate__delay-1s">
                                <img src={require('../../assets/tree.png')} alt="" />
                            </div>
                            <div className="car animate__animated animate__fadeInLeft animate__delay-1s">
                                <img src={require('../../assets/ec.png')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Hero