import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Atoms/Navbar";
import Footer from "./Components/Atoms/Footer";
import Category from "./Pages/Category";
import WaterClosets from "./Components/Atoms/WaterClosets";
import WaterBasins from "./Components/Atoms/WashBasins";
import WallHungs from "./Components/Atoms/WallHungs";
import ComboPacks from "./Components/Atoms/ComboPacks";
import BathTubs from "./Components/Atoms/BathTubs";
import UrinalandAcce from "./Components/Atoms/UrinalandAcce";
import SeeAll from "./Components/Atoms/SeeAll";
import Products from "./Pages/Products";
import Favorites from "./Pages/Favorites";
import SearchPage from "./Pages/SearchPage";
import Notificattion from "./Pages/Notification";
import Profile from "./Pages/Profile";
import EditProfile from "./Components/Atoms/Editprofile";
import PrivacyPolicy from "./Components/Atoms/PrivacyPolicy";
import HelpandSupport from "./Components/Atoms/HelpandSupport";
import ChangePassword from "./Components/Atoms/ChangePassword";
import NotificattionSettings from "./Components/Atoms/NotificationSettings";
import Language from "./Components/Atoms/Language";
import DetailWaterClosets from "./Components/Atoms/DetailWaterClosets";
import DetailWashBasin from "./Components/Atoms/DetailWashBasin";
import DetailWallHungs from "./Components/Atoms/DetailWallHungs";
import DetailComboPacks from "./Components/Atoms/DetailComboPacks";
import DetailBathTubs from "./Components/Atoms/DetailBathTubs";
import DetailUrinal from "./Components/Atoms/DetailUrinal";
import DetailShower from "./Components/Atoms/DetailShower";
import DetailHook from "./Components/Atoms/DetailHook";
import DetailSoapDish from "./Components/Atoms/DetailSaopDish";
import DetailMirror from "./Components/Atoms/DetailMirror";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="navbar" element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/water-closets" element={<WaterClosets />} />
          <Route path="/wash-basins" element={<WaterBasins />} />
          <Route path="/wall-hungs" element={<WallHungs />} />
          <Route path="/combo-packs" element={<ComboPacks />} />
          <Route path="/bath-tubs" element={<BathTubs />} />
          <Route path="/urinals-accessories" element={<UrinalandAcce />} />
          <Route path="/see-all" element={<SeeAll />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/notifications" element={<Notificattion />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/help-support" element={<HelpandSupport />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route
            path="/notification-settings"
            element={<NotificattionSettings />}
          />
          <Route path="/change-language" element={<Language />} />
          <Route path="/detail-water-closet" element={<DetailWaterClosets />} />
          <Route path="/detail-wash-basin" element={<DetailWashBasin />} />
          <Route path="/detail-wall-hungs" element={<DetailWallHungs />} />
          <Route path="/detail-combo-packs" element={<DetailComboPacks />} />
          <Route path="/detail-bath-tubs" element={<DetailBathTubs />} />
          <Route path="/detail-urinal" element={<DetailUrinal />} />
          <Route path="/detail-shower" element={<DetailShower />} />
          <Route path="/detail-hook" element={<DetailHook />} />
          <Route path="/detail-soap-dish" element={<DetailSoapDish />} />
          <Route path="/detail-mirror" element={<DetailMirror />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
