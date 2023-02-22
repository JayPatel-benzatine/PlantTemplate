import React from 'react'
import Navbars from '../component/navbar/Navbars'
import Solution from '../component/solution/Solution'
import Footer from '../component/footer/Footer'
import Cardss from '../component/cardsss/Cardss'
import Aboutus from '../component/about/Aboutus'
import Scroll from '../component/Scroll Button/Scroll'

const About = () => {
    return (
        <>
            <Navbars />
            <Aboutus />
            <Solution />
            <Cardss />
            <Footer />
            <Scroll />
        </>
    )
}

export default About