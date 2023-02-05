//FIRST WE CREATE FOLDER app AND THE UNDER CREATE FILE store.js
//SECOND WE CREATE A components FOLDER AND THEN UNDER CREATE THREE FILE CartPage.js Navbar.js ProductCard.js
//THIRLD WE CREATE A features folder AND UNDER CREATE A cartSlice.js FILE 
//ONE FILE CREATE A productData.js


import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/CartPage";

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>

    </div>
  );
}
export default App;