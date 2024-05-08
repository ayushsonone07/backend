import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Register from './pages/Register';
import Navbar from './Components/Navbar';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { useAuth } from './store/context';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Services' element={<Services/>} /> 
        <Route path='/Register' element={<Register/>} />
        <Route path='/Logout' element={<Logout/>} />
        <Route path='/Login' element={<Login/>} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
