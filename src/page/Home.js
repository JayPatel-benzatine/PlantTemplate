import React from 'react'
import Navbars from '../component/navbar/Navbars'
import Hero from '../component/hero/Hero'
import Des from '../component/description/Des'
import Formss from '../component/form/Formss'
import Slider from '../component/swiper/Slider'
import Solution from '../component/solution/Solution'
import Footer from '../component/footer/Footer'
import Cardss from '../component/cardsss/Cardss'
import Scroll from '../component/Scroll Button/Scroll'

const Home = () => {
  return (
    <>
      <Navbars />
      <Hero />
      <Des />
      <Solution />
      <Formss />
      <Cardss />
      <Slider />
      <Footer />
      <Scroll />
    </>)
}

export default Home