import React from "react";
import { Button, Card } from "react-bootstrap";

const CardMod = () => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src="https://weneedfun.com/wp-content/uploads/2016/11/Avengers-Logo-9.jpg"
                    width="100"
                    height="100"
                />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default CardMod;