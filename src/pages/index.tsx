import { Routes, Route, BrowserRouter, useLocation, } from "react-router-dom"
import Home from "./Home"
import Website from './Website';
import Marketing from "./Marketing"
import Navigation from "../components/NavBar"
import Footer from "../components/Footer"
import Navigation2 from "../components/NavBar2"
import Branding from "./Branding";
import About from './About';
import Contact from './Contact';

const Router = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/website" element={<Website/>}/>
        <Route path="/branding" element={<Branding/>}/>
        <Route path="/marketing" element={ <Marketing/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/>} />
      </Routes>
    </div>
  )
}

const Location = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
          {location.pathname === "/" ? <Navigation/> : <Navigation2/>}
          <Router />
          <Footer/>
    </>
  )
}

const MainRouter = () => {
  return (
    <div>
        <BrowserRouter>
          <Location/>
        </BrowserRouter>
    </div>
  )
}

export default MainRouter;
