import AuthService from "../../services/auth.service";
import CarService from "../../services/car.service";
import Card from "../common/Card";
import { useEffect, useState } from "react";

export default function Statistics() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCars, setTotalCars] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const users = await AuthService.getAllUsers();
      const cars = await CarService.getAllCars();
      const orders = await CarService.getAllOrders();
      console.log(cars);
      setTotalUsers(users.total);
      setTotalCars(cars.data.length);
      setTotalOrders(orders.data.length);
    }
    fetchData();
  });
  return (
    <div className="flex justify-around max-w-5xl py-10 mx-auto">
      <Card count={totalUsers} title={"Total users"} />
      <Card count={totalCars} title={"Total cars"} />
      <Card count={totalOrders} title={"Total orders"} />
    </div>
  );
}
