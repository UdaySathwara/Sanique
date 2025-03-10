import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Atoms/Navbar";
import Footer from './Components/Atoms/Footer';
import Category from './Pages/Category';
import WaterClosets from './Pages/WaterClosets';
import WaterBasins from './Pages/WashBasins';
import WallHungs from './Pages/WallHungs';
import ComboPacks from './Pages/ComboPacks';
import BathTubs from './Pages/BathTubs';
import UrinalandAcce from './Pages/UrinalandAcce';
import SeeAll from './Components/Atoms/SeeAll';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="navbar" element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path='/water-closets' element={<WaterClosets />} />
          <Route path='/wash-basins' element={<WaterBasins />} />
          <Route path='/wall-hungs' element={<WallHungs />} />
          <Route path='/combo-packs' element={<ComboPacks />} />
          <Route path='/bath-tubs' element={<BathTubs />} />
          <Route path="/urinals-accessories" element={<UrinalandAcce />} />
          <Route path="/see-all" element={<SeeAll />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
