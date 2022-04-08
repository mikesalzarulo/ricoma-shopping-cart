import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return(
    <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/About" element={<About />} />
      <Route path="/Cart" element={<Cart />}>

      </Route>
    </Routes>
    <Footer />
  </Router>
  )
}


export default App;
