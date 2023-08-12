import './styles/app.css';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Main />
      <Contact />
    </div>
  );
}

export default App;
