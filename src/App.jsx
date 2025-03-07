import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Atoms/Navbar";
import Footer from './Components/Atoms/Footer';
import Category from './Pages/Category';
import WaterClosets from './Pages/WaterClosets';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="navbar" element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path='/water-closets' element={<WaterClosets />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
