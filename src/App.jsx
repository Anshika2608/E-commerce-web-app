import React from "react"
import {Route,Routes} from 'react-router-dom'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Wishlist from "./Pages/Wishlist/Wishlist"
import Layout from "./Components/Layout/Layout"
import Home from "./Pages/Home/Home"
import MenBottomwear from "./Pages/men/MenBottomwear"
import MenTopwear from "./Pages/men/MenTopwear"
import MenFootwear from "./Pages/men/MenFootwear"
import SingleProduct from "./Pages/SingleProduct/SingleProduct"

function App() {
  return (
    <>
  
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path="/MenBottomwear" element={<MenBottomwear/>}/>
      <Route path="/MenTopwear" element={<MenTopwear/>}/>
      <Route path="/MenFootwear" element={<MenFootwear/>}/>
      <Route path="/Singleproduct/:id" element={<SingleProduct/>}/>
      <Route path='/Men' element={<Men/>}/>
      <Route path='/Women' element={<Women/>}/>
      <Route path='/Kids' element={<Kids/>}/>
      <Route path='/wishlist' element={<Wishlist/>} />
      </Route>
     </Routes>
     
   
    </>
  )
}

export default App
