import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Account from "./Components/Account";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Navbar2 from "./Components/Navbar2";
//import Search from "./Components/Search";
import DisplayAllCardsMed from "./Components/DisplayAllCardsMed";
//import SearchedItems from "./Components/SearchedItems";
import { useSelector } from "react-redux";
import Chat from "./Components/Chat/Chat";
import RequestsMedecines from "./Components/RequestsMedecines/RequestsMedecines";
import AcceptingRequest from "./Components/AcceptingRequest/AcceptingRequest";
import Noti from "./Components/AcceptingRequest/Noti";
import Acceptaion from "./Components/AcceptingRequest/Acceptaion";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
 
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/account"
          element={user ? <Account /> : <Navigate to="../login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="../account" /> : <Login />}
        />
        <Route
          path="/signUp"
          element={user ? <Navigate to="../account" /> : <SignUp />}
        />
        <Route path="/chat" element={user ? <Chat /> : <Navigate to="../" />} />
        <Route path="/displayMed" element={<DisplayAllCardsMed />} />
        <Route path="/requests" element={<RequestsMedecines />} />
        <Route
          path="/notifications"
          element={user ? <Noti rey={"notifications"} /> : <Navigate to="../" />}
        >
          <Route index element={<AcceptingRequest />} />
          <Route path="myrequests" element={<AcceptingRequest />} />
          <Route path="alert" element={<Acceptaion />} />
        </Route>
        <Route path="*" element={<Navigate to="../" />} />
     
      </Routes>
    </div>
  );
}

export default App;
