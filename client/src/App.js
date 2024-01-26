import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AuthService from "./services/auth.service";
import Navbar from "./components/main/Navbar";
import DashBoard from "./pages/DashBoard";
import SignInPage from "./pages/auth/SignIn";
import SignUpPage from "./pages/auth/SignUp";
import ProfilePage from "./pages/auth/Profile";
import ReservationPage from "./pages/reservation/Reservation";
import MyReservationsPage from "./pages/reservation/MyReservations";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);

  return (
    <div className="App">
      <Navbar currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/myreservations" element={<MyReservationsPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </div>
  );
}

export default App;
