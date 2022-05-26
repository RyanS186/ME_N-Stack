import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Form from './components/Form';
import Results from './components/Results';
import Dory from './components/Dory';
import Footer from './components/Footer';
import './css/App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>  
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/fish/2" element={<Dory/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
