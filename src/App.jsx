import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (recipe) => {
    const isExist = cart.find((item) => item.id == recipe.id);
    if (!isExist) {
      setCart((p) => [...p, recipe]);
    } else {
      toast.warn("Already Exist!");
    }
  };

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id != id);
    setCart(newCart)
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="grid grid-cols-5 container mx-auto gap-8">
        <div className="col-span-3">
          <Recipes handleAddToCart={handleAddToCart}></Recipes>
        </div>
        <div className="col-span-2">
          <Cart handleRemove={handleRemove} cart={cart}></Cart>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
