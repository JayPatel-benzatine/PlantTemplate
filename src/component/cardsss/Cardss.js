import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './cards.scss'
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Cardss = () => {
    const detail = [
        {
            name: 'hear the trees falling?',
            detail: "cut a tree,cut a tree and there'll be no more left to see.take care of trees.",
            img: require('../../assets/p1.jpeg')
        },
        {
            name: 'Spare a watt, save a lot.',
            detail: "Turn off the lights before you perish. Unite and save the earth.",
            img: require('../../assets/p2.jpeg')
        },
        {
            name: 'Pollution is not a solution.',
            detail: "Protect our earth today for our children’s tomorrow.",
            img: require('../../assets/p3.jpeg')
        },
    ]
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='cards_main py-5'>
            <Container id='cds'>
                {
                    detail.map((elm) => {
                        return (<React.Fragment key={elm.name}>
                            <Card style={{ width: '20rem' }} data-aos="zoom-in">
                                <Card.Img variant="top" src={elm.img} />
                                <Card.Body className='cbg'>
                                    <Card.Title className='ct'>{elm.name}</Card.Title>
                                    <Card.Text className='cd text-muted'>{elm.detail}</Card.Text>
                                    <p className='cardsss_btn'>learn more</p>
                                </Card.Body>
                            </Card>
                        </React.Fragment>)
                    })
                }

            </Container>
        </div>
    )
}

export default Cardss