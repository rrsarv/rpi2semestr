import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import FavoritesPage from "../../pages/favorites-page/favorites-page";
import ErrorPage from "../../pages/error-page/error-page";
import OfferPage from "../../pages/offer-page/offer-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

type AppMainPageProps={
    rentalOffersCount: number;
}


function App({rentalOffersCount}: AppMainPageProps): JSX.Element{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MainPage rentalOffersCount={rentalOffersCount} />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/offer" element={<OfferPage/>} />
        <Route path="/favorites" element={<FavoritesPage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  )
}

export default App;