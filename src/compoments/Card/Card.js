import React from "react";
import { Button, Card } from "react-bootstrap";

const CardMod = ({img, title, text}) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src={img}
                    width="100"
                    height="100"
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
    <Card.Text>{text}</Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default CardMod;