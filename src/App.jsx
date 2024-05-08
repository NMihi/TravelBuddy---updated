import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Cards from './components/Cards/Cards'
import Tours from './components/Tours/Tours'
import Discount from './components/Discount/Discount'
import Review from './components/Review/Review'
import Staff from './components/Staff/Staff'
import Footer from './components/Footer/Footer'


const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Home/>
      <Cards/>
      <Tours/>
      <Discount/>
      <Review/>
      <Staff/>
      <Footer/>

    </div>
  )
}

export default App
