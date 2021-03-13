import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';

function event () {
    return (
        <div>
            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Event</Card.Title>
                <Card.Text>
                    Name:
                </Card.Text>
                <Card.Text>
                    Day:
                </Card.Text>
                <Card.Text>
                    Time:
                </Card.Text>
                <Button variant="primary">Finish</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default event
