import styled from 'styled-components';
import './App.css';
import AllRoutes from './components/AllRoutes';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <DIV className="App">
      <Navbar/>
      <AllRoutes/>
    </DIV>
  );
}

export default App;

const DIV=styled.div`
box-sizing: border-box;
margin: 0;
padding: 0;
background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
`