import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import NavBar from './NavBar';
import ListContainer from './components/ListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import {CustomProvider} from "../src/Context/CustomContext"



function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ListContainer title={"Kittens Shop"} />} />
        <Route path="/categoria/:id" element={<ListContainer title={"Kittens Shop"} />} />
        <Route path="/products/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default () => <CustomProvider>
  <App></App>
</CustomProvider>
