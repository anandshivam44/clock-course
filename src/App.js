import './App.css';
import CardMod from './compoments/Card/Card';
import { CardColumns } from "react-bootstrap";
import NavBarMod from './compoments/NavBar/NavBar';

function App() {
  return (
    <>
    <NavBarMod />
    <br></br>
    <CardColumns>
    <CardMod />
    <CardMod />
    <CardMod />
    </CardColumns>
      
    </>
  );
}

export default App;
