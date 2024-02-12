import About from "../components/main/About";
import Contact from "../components/main/Contact";
import Home from "../components/main/Home";
import Pricing from "../components/main/Pricing";
import React, { useState, useEffect } from "react";
import Statistics from "../components/main/Statistics";
import LineChart from "../components/common/LineChart";

import { Pagination } from "flowbite-react";
const CarsContext = React.createContext({
  cars: [],
  fetchCars: () => {},
});

export default function DashBoard({
  currentUser,
  section1ref,
  section2ref,
  section3ref,
  section4ref,
}) {
  const [carData, setCarData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const onPageChange = (page) => setCurrentPage(page);
  const fetchCars = async (pageIndex) => {
    const response = await fetch(
      `http://35.173.248.65/api/v1/car/all?page=${currentPage}&size=10`
    );
    const cars = await response.json();
    setCarData(cars.items);
    setTotal(cars.total);
  };
  useEffect(() => {
    fetchCars(currentPage);
  }, [currentPage]);

  return (
    <>
      <CarsContext.Provider value={{ carData, fetchCars }}>
        {currentUser && currentUser.role === "admin" ? (
          <div className="h-screen bg-blue-100 ">
            <Statistics />
            <LineChart />
          </div>
        ) : (
          <div>
            <Home carData={carData} sectionref={section1ref} />
            <div className="max-w-5xl mx-auto">
              <Pricing carData={carData} sectionref={section2ref} />
              <Pagination
                className="px-8 pb-11"
                currentPage={currentPage}
                totalPages={Math.ceil(total / 10)}
                onPageChange={onPageChange}
              />
            </div>
            <About sectionref={section3ref} />
            <Contact sectionref={section4ref} />
          </div>
        )}
      </CarsContext.Provider>
    </>
  );
}
