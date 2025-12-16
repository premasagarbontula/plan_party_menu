import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import MenuCategories from "./components/MenuCategories";

function App() {
  return (
    <div className="App">
      <Header />
      <MenuCategories />
      <Cart />
    </div>
  );
}

export default App;
