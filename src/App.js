
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Account from './Components/Account';
 import Contact from './Components/Contact';
import Home from './Components/Home';
 import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Navbar2 from './Components/Navbar2';
import Search from './Components/Search';
  import DisplayAllCardsMed from './Components/DisplayAllCardsMed';
import SearchedItems from './Components/SearchedItems';
 
  

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/displayMed" element={<DisplayAllCardsMed />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchedItems" element={<SearchedItems />} />
      </Routes>
    </div>
  );
}

export default App;
