import './App.css';
// import { CardColumns,
//           Container,
//           Col,
//           Row
//       }
//        from "react-bootstrap";

import ListPost from "./compoments/ListPost/ListPost";
import NavBarMod from './compoments/NavBar/NavBar';
// import Post from './compoments/Post/post';
import Footer from "./compoments/Footer/Footer"


function App() {
  return (
    <>
    <NavBarMod />
    <ListPost />

    {/* <Container>
      <Row>
        <Col md={1}>
        </Col>
        <Col md={10}>
    <br></br>
    <CardColumns>
    </CardColumns>
        </Col>
        <Col md={1}>
        </Col>
      </Row>
    </Container> */}

    {/* <Post /> */}
    <Footer />

      
    </>
  );
}

export default App;