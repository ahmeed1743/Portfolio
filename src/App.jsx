/*
    1 - The Default Font is NeueMontreal
    2 - The Installed Fonts ==> [ Neue Montreal , Founders Grotesk]

*/
import './App.css'
import { Routes, Route } from 'react-router-dom'
// import LocomotiveScroll from 'locomotive-scroll';
import Header from './components/Header'
import Home from './components/Home'
import Marquee from './components/Marquee'
import Approach from './components/Approach'
import AboutMe from './components/AboutMe'
import About from './components/About'
// import Eyes from './components/Eyes'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
// import { useEffect , useState } from 'react';
// import { document } from 'postcss';
import Carousel from './components/Carousel'



function App() {


  return (
    <div className=''>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Marquee />
              <Approach />
              <AboutMe />
              <Carousel />
            </>
          }
        />
        <Route
          path="About"
          element={<About />}
        />
        <Route
          path="Projects"
          element={<Projects />}
        />
        <Route
          path="Contact"
          element={<Contact />}
        />
      </Routes>
      {/* <Eyes /> */}
      <Footer />
    </div>
  )
}

export default App
