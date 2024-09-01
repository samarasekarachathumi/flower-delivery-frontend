import React from 'react'
import { Routes, Route} from 'react-router-dom'


import Navbar from './component/Navbar'
import Home from './page/home'
import Cart from './page/cart'
import Collection from './page/collection'
import Contact from './page/contact'
import Login from './page/login'
import Order from './page/order'
import Product from './page/product'
import ProductOder from './page/ProductOder'
import Fotter from './component/Fotter'
import Searchbar from './component/Searchbar'
import About from './page/about';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <Searchbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/collection' element={<Collection/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/product/:productId' element={<Product/>}/>
    <Route path='/palce-order' element={<ProductOder/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    <Fotter/>
    </div>
  )
}
export default App
