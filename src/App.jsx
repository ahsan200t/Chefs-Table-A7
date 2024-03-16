import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cooking from "./components/Cooking/Cooking";

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
    setCart(newCart);
  };
  const [cooking, setCooking] =useState([]);
  const handleCooking = (item) => {
    setCooking([...cooking, item])
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="md:grid grid-cols-5 container mx-auto gap-8">
        <div className="md:col-span-3">
          <Recipes handleAddToCart={handleAddToCart}></Recipes>
        </div>
        <div className="md:col-span-2">
          <Cart 
          handleRemove={handleRemove} 
          handleCooking={handleCooking}
          cart={cart}></Cart>
          <Cooking
          cooking={cooking}
          ></Cooking>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
