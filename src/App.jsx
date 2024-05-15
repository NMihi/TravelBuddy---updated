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
      <section id="home">
      <Home/>
      </section>
      <section id="cards">
      <Cards/>
      </section>
      <section id="tours">
      <Tours/>
      </section>
      <section id="discount">
      <Discount/>
      </section>
      <section id="review">
      <Review/>
      </section>
      <section id="staff">
      <Staff/>
      </section>
      <section id="footer">
      <Footer/>
      </section>

    </div>
  )
}

export default App
