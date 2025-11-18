import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/navbar"
import Bar from "./components/Bar"
import React from "react"
import './index.css'
import ProductCard from "./components/ProductCard"

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Bar/>
    <ProductCard />
    <Footer />
    </>
  )
}

export default App
