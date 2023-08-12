import './styles/app.css';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const aboutRef = useRef(null);
  const mainRef = useRef(null);
  const contactRef = useRef(null);

  const [navColor, setNavColor] = useState('white');
  const [navBG, setNavBG] = useState('#099bc0');

  useEffect(() => {
    const checkScrolled = (event) => {
      if (window.scrollY !== 0) {
        setNavColor('#099bc0');
        setNavBG('white');
      } else if (window.scrollY === 0) {
        setNavColor('white');
        setNavBG('#099bc0');
      }
    };

    window.addEventListener('scroll', checkScrolled);

    return () => {
      window.removeEventListener('scroll', checkScrolled);
    }
  }, [])

  return (
    <div className="app">
      <Nav 
        aboutRef={aboutRef}
        mainRef={mainRef}
        contactRef={contactRef}
        navBG={navBG}
        navColor={navColor}
      />
      <Header />
      <About 
        aboutRef={aboutRef}     
      />
      <Main
        mainRef={mainRef}
      />
      <Contact
        contactRef={contactRef} 
      />
    </div>
  );
}

export default App;
