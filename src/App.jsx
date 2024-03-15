import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'



function App() {
   const [cart, setCart] =useState([]);
  const handleAddToCart=(recipe)=>{
    setCart(p=>[...p, recipe])
  }
  

  return (
    <>  
      <Navbar></Navbar>
      <Banner></Banner>
     <div className='grid grid-cols-5 container mx-auto gap-8'>
     <div className='col-span-3'>
      <Recipes 
      handleAddToCart={handleAddToCart}
      ></Recipes>
     </div>
     <div className='col-span-2'>
     <Cart
     cart={cart}
     ></Cart>
     </div>
     </div>
      
      
      
      
      
      
    </>
  )
}

export default App
