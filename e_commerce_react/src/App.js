import "./App.css";
import { BrowserRouter as Router, Route,  Routes} from "react-router-dom";
import Home from './Home' 
import About from './About'
import Products from './Products'
import Contact from './Contact'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import ErrorPage from './ErrorPage'

function App() {
  return <>
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Singleproduct/:id" element={<SingleProduct />}/>
      <Route path="/Cart" element={<Cart />}/>
      <Route path="*" element={<ErrorPage />}/>
    
    </Routes>
  </Router>
  
  </>;
}

export default App;
