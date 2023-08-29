import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/home';
function App() {
  return (
   <>
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
          </BrowserRouter>

   </>

  );
}

export default App;
