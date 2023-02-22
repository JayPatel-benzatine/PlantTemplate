import React from 'react'
import Navbars from '../component/navbar/Navbars'
import Solution from '../component/solution/Solution'
import Footer from '../component/footer/Footer'
import Contacts from '../component/contact/Contacts'
import Cardss from '../component/cardsss/Cardss'
import Cform from '../component/cform/Cform'
import Scroll from '../component/Scroll Button/Scroll'
const Contact = () => {
  return (
    <>
      <Navbars />
      <Contacts />
      <Cform />
      <Solution />
      <Cardss />
      <Footer />
      <Scroll />
    </>
  )
}

export default Contact