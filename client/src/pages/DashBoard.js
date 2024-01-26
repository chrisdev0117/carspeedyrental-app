import About from "../components/main/About";
import Contact from "../components/main/Contact";
import Home from "../components/main/Home";
import Pricing from "../components/main/Pricing";
import React, { useState, useEffect } from "react";
const CarsContext = React.createContext({
  cars: [],
  fetchCars: () => {},
});

export default function DashBoard() {
  const [carData, setCarData] = useState([]);
  const fetchCars = async () => {
    const response = await fetch("http://localhost:8000/api/v1/car/all");
    const cars = await response.json();
    //console.log(cars);
    setCarData(cars);
  };
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
      <CarsContext.Provider value={{ carData, fetchCars }}>
        <Home carData={carData} />
        <Pricing carData={carData} />
        <About />
        <Contact />
      </CarsContext.Provider>
    </>
  );
}
