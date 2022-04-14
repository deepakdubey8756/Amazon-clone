
// import Sidebar from './sidebar/Sidebar';
import './App.css';
import Header from './components/header/Header.js';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Checkout from './pages/checkout/Checkout';
import ProdState from "./context/notes/ProdState"
import Footer from './components/footer/Footer';

function App() {

  return (
    // BEM
    <div className="App">
    <ProdState>
    <Router>
          <Header/>
          <Routes>
              <Route  path="/home" element={<Home/>}/> 
              <Route path="/checkout" element={<Checkout/>}/>  
              <Route path="/*" element={<Home/>}/>
            </Routes>
            <Footer/>
          </Router>
    </ProdState>
    </div>
  );
}
export default App;
