// import React from 'react'

import Footer from "./components/Footer"
import Heroone from "./components/Heroone"
import Herothird from "./components/Herothird"
import Herotwo from "./components/Herotwo"
import Navbar from "./components/Navbar"

function Home() {
  return (
    <>
       <Navbar/>
       <Heroone/>
       <Herotwo/>
       <Herothird/>
       <Footer/>
    </>
  )
}

export default Home