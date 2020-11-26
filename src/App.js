import './App.css';
import CardMod from './compoments/Card/Card';
import { CardColumns,
          Container,
          Col,
          Row
      }
       from "react-bootstrap";
import NavBarMod from './compoments/NavBar/NavBar';


function App() {
  return (
    <>
    <NavBarMod />
    <Container>
      <Row>
        <Col md={1}>
        </Col>
        <Col md={10}>
    <br></br>
    <CardColumns>
    <CardMod />
    <CardMod />
    <CardMod />
    </CardColumns>
        </Col>
        <Col md={1}>
        </Col>
      </Row>
    </Container>
      
    </>
  );
}

export default App;
