import React from 'react'
import './des.scss'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


const Des = () => {
    const name = ['energy saving', 'save the planet', 'paper recycling']
    return (
        <div className='decs p-5'>
            <Container>
                {
                    name.map((elm) => {
                        return (
                            <React.Fragment key={elm}>
                                <Card className="animate__animated animate__slideInUp animate__delay-2s">
                                    <Card.Body>
                                        <Card.Title>{elm}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <span>learn more</span>
                                    </Card.Body>
                                </Card>
                            </React.Fragment>
                        )
                    })
                }

            </Container>
        </div>
    )
}

export default Des