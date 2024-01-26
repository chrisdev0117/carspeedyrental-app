import Contact from "../../components/main/Contact";

export default function MyReservationsPage() {
  return (
    <div>
      <div className="max-w-5xl py-10 mx-auto">
        <h1 className="mb-5 text-4xl font-semibold text-center">
          Your Reservations
        </h1>
        <table className="w-full">
          <tr className="text-lg text-white bg-gray-800">
            <th className="py-4">Name</th>
            <th>Start Date</th>
            <th>End Date </th>
            <th>Total Price</th>
            <th>Miles Included</th>
            <th>Deposit</th>
            <th>LDW </th>
            <th>RCLI</th>
            <th>Receipt Url</th>
          </tr>
        </table>
      </div>
      <Contact />
    </div>
  );
}
