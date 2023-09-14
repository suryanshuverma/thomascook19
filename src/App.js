import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/home';
import Holidays from './Components/Holidays/Holidays';
import Flights from './Components/Flights/Flights';
import Hotels from './Components/Hotels/Hotels';
import GiftCard from './Components/Gift Cards/GiftCard';
import Offers from './Components/Offers/Offers';
import Register from './Components/Authentication/Register';
import List from './Components/Hotels/List';
import HotelPage from './Components/Hotels/HotelPage';
import Login from './Components/Authentication/Login';
import HotelUserDetails from './Components/Hotels/HotelUserDetails';
import TopNavbar from './Components/TopNavBar/TopNavbar';

function App() {
  return (
   <>
   <BrowserRouter>
        <TopNavbar/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/holidays" element={<Holidays/>}/>
          <Route path="/hotels" element={<Hotels/>}/>
          <Route path="/flights" element={<Flights/>}/>
          <Route path="/gift-cards" element={<GiftCard/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* ***************************************** */}
          <Route path="/hotels/list" element={<List/>}/>
          <Route path="/hotels/list/hotelpages" element={<HotelPage/>}/>
             <Route path="/hotels/hoteluserdetails" element={<HotelUserDetails/>}/>
             {/* <Route path="/hotels/list/hotelpages/book" element={<BookingDetails/>}/> */}
          </Routes>
          </BrowserRouter>

   </>

  );
}

export default App;
