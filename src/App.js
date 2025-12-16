import "./App.css";
import BottomBar from "./components/BottomBar";
import Cart from "./components/Cart";
import Header from "./components/Header";
import MenuCategories from "./components/MenuCategories";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MenuCategories />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <BottomBar />
    </BrowserRouter>
  );
}

export default App;
