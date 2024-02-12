import { useEffect, useState } from "react";
import Contact from "../../components/main/Contact";
import AuthService from "../../services/auth.service";

export default function MyReservationsPage({ currentUser }) {
  const [reservations, setReservations] = useState([]);
  const fetchReservations = async (user) => {
    const response = await fetch(
      `http://35.173.248.65/api/v1/auth/reservation?email=${user.email}`
    );
    const me = await response.json();
    console.log("aaaaaaaaaaaaaa");
    console.log(me);
    setReservations(me.cars);

    console.log(reservations);
  };
  useEffect(() => {
    console.log("bbbbbbbbbbbbbbbbbbb");
    console.log(currentUser);
    fetchReservations(AuthService.getCurrentUser());
  }, []);
  return (
    <div>
      <div className="max-w-5xl py-10 mx-auto">
        <h1 className="mb-5 text-4xl font-semibold text-center">
          Your Reservations
        </h1>
        <table className="w-full text-left">
          <tr className="text-lg text-white bg-gray-800">
            <th className="py-4 w-[11%]">Name</th>
            <th className="w-[11%]">Start Date</th>
            <th className="w-[11%]">End Date </th>
            <th className="w-[11%]">Total Price</th>
            <th className="w-[11%]">Miles Included</th>
            <th className="w-[11%]">Deposit</th>
            <th className="w-[11%]">LDW </th>
            <th className="w-[11%]">RCLI</th>
            <th className="w-[11%]">Receipt Url</th>
          </tr>
        </table>
        <tbody className="w-full text-center">
          {reservations.map((reservation, index) => (
            <tr
              className="text-lg text-center text-black bg-gray-200"
              key={index}
            >
              <td className="w-[11%] py-2">{reservation.carname}</td>
              <td className="w-[11%]">{reservation.startDate}</td>
              <td className="w-[11%]">{reservation.endDate}</td>
              <td className="w-[11%]">{reservation.totalPrice.toFixed(2)}$</td>
              <td className="w-[11%]">{100}</td>
              <td className="w-[11%]">{5}</td>
              <td className="w-[11%]">{32}</td>
              <td className="w-[11%]">{32}</td>
              <td className="w-[11%]">{"http://receipt.com"}</td>
            </tr>
          ))}
        </tbody>
      </div>
      <Contact />
    </div>
  );
}
