import './styles/app.css';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';
import { useRef } from 'react';

function App() {
  const aboutRef = useRef(null);
  const mainRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="app">
      <Nav 
        aboutRef={aboutRef}
        mainRef={mainRef}
        contactRef={contactRef} 
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
