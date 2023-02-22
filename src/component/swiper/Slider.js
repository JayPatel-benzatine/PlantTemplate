import React from 'react'
import { Container } from 'react-bootstrap'
import './slide.scss'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Slider = () => {
    const detail = [
        {
            name: 'It’s easy being green- Reduce, Reuse, Recycle.',
            detil: 'Modern technology owes ecology an apology. Recycle takes little effort on your part, for a big difference to our world.',
            img: require('../../assets/cs1.jpeg')
        },
        {
            name: 'It’s easy being green- Reduce, Reuse, Recycle.',
            detil: 'Modern technology owes ecology an apology. Recycle takes little effort on your part, for a big difference to our world.',
            img: require('../../assets/cs2.jpeg')
        }
    ]
    return (
        <div className='slider_mains py-5'>
            <Container>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper py-5 px-3"
                >
                    {
                        detail.map((elm) => {
                            return (<React.Fragment key={elm.name}>
                                <SwiperSlide>
                                    <div className="swipe">
                                        <div className="swipe_left">
                                            <img className='img-fluid' src={elm.img} alt="" />
                                        </div>
                                        <div className="swipe_right px-5 py-4">
                                            <h5>{elm.name}</h5>
                                            <p className=' text-muted'>{elm.detil} </p>
                                            <button className='btns'>get involved</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </React.Fragment>)
                        })
                    }


                </Swiper>
            </Container>
        </div>
    )
}

export default Slider