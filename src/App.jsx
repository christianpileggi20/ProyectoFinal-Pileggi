import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import logo from './imagenes/logo.png';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        
      </Routes>
    </BrowserRouter>
  );
}









export default App;
