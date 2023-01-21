 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Account from './Components/Account';
import CardDisplay from './Components/CardDisplay';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
  

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/displayMed" element={<CardDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
