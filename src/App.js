
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { } from 'reactstrap';
import './App.css';
import Shirt from './Pages/Shirt';
import Commerece from './Component/Commerece';
import Users from './Routing/Users';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Commerece Products/>}></Route>
        <Route path="/products/:id" element={<Shirt/>}></Route>
        <Route path="/" exact element={<Users/>}></Route>
        <Route apth='/item/:product' element={<Users/>}/>
      </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
