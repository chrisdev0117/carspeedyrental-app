import { Routes, Route } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

import AuthService from "./services/auth.service";
import Navbar from "./components/main/Navbar";
import DashBoard from "./pages/DashBoard";
import SignInPage from "./pages/auth/SignIn";
import SignUpPage from "./pages/auth/SignUp";
import ProfilePage from "./pages/auth/Profile";
import ReservationPage from "./pages/reservation/Reservation";
import MyReservationsPage from "./pages/reservation/MyReservations";
import UsersPage from "./pages/admin/Users";
import CarsPage from "./pages/admin/Cars";
function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
    console.log("current user");
    console.log(currentUser);
  }, []);

  const section1ref = useRef(null);
  const section2ref = useRef(null);
  const section3ref = useRef(null);
  const section4ref = useRef(null);

  return (
    <div className="App">
      <Navbar
        currentUser={currentUser}
        onSectionClick={{
          section1: section1ref,
          section2: section2ref,
          section3: section3ref,
          section4: section4ref,
        }}
      />

      <Routes>
        <Route
          path="/"
          element={
            <DashBoard
              currentUser={currentUser}
              section1ref={section1ref}
              section2ref={section2ref}
              section3ref={section3ref}
              section4ref={section4ref}
            />
          }
        />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/myreservations"
          element={<MyReservationsPage currentUser={currentUser} />}
        />
        <Route path="/reservation" element={<ReservationPage />} />

        <Route path="/users" element={<UsersPage />} />
        <Route path="/cars" element={<CarsPage />} />
      </Routes>
    </div>
  );
}

export default App;
