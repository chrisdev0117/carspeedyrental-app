import Footer from "./components/Footer.component";
import Home from "./components/Home..component";
import Navbar from "./components/Navbar.component";
import Login from "./components/Login.component";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register.component";
import AuthService from "./services/auth.service";
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);
  return (
    <div className="App">
      <Navbar currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
