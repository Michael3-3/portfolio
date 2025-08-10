import React from 'react';
import BgImg from './assets/portfolio-background-header-53082_1080x675.jpg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
function App() {


  return (
    <>
    <div className='h-screen w-full bg-[url(./assets/portfolio-background-header-53082_1080x675.jpg)] bg-cover bg-center'>
        <Navbar />
        <Hero/>
      </div>
    </>
  )
}

export default App
