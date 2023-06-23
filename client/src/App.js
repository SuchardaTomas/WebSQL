import "./App.css";

import Header from "./Header";

import { Routes, Route } from "react-router-dom";

import Error from "./components/Error";

import Home from "./Home";
import Products from "./Products";
import Contacts from "./Contacts";
import Cart from "./Cart";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact index element={<Home />} />

        <Route path='products' element={<Products />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='cart' element={<Cart />} />

        <Route path='*' element={<Error />} />
      </Routes>
      
    </>
  );
};

export default App;
