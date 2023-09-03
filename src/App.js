import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/home';
import Holidays from './Components/Holidays/Holidays';
import Flights from './Components/Flights/Flights';
import Hotels from './Components/Hotels/Hotels';
import GiftCard from './Components/Gift Cards/GiftCard';
import Offers from './Components/Offers/Offers';
function App() {
  return (
   <>
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/holidays" element={<Holidays/>}/>
          <Route path="/hotels" element={<Hotels/>}/>
          <Route path="/flights" element={<Flights/>}/>
          <Route path="/gift-cards" element={<GiftCard/>}/>
          <Route path="/offers" element={<Offers/>}/>
          </Routes>
          </BrowserRouter>

   </>

  );
}

export default App;
