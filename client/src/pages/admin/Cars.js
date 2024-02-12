import CarTable from "../../components/tables/CarTable";
import React from "react";
import { useState, useEffect } from "react";
import CarService from "../../services/car.service";
import { Pagination } from "flowbite-react";

const CarsContext = React.createContext({
  cars: [],
  fetchCars: () => {},
});

export default function CarsPage() {
  const [carData, setCarData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const fetchCars = async (currentPage) => {
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

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <CarsContext.Provider value={{ carData, fetchCars }}>
      <div className="h-full bg-blue-100">
        <div className="max-w-5xl py-10 mx-auto ">
          <h1 className="pb-5 text-5xl font-semibold">Cars</h1>
          <CarTable carData={carData} />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(total / 10)}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </CarsContext.Provider>
  );
}
