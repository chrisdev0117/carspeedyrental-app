import PayDetail from "../../components/main/PayDetail";
import ReservationInfo from "../../components/main/ReservationInfo";
import ReservedCar from "../../components/main/ReservedCar";

export default function ReservationPage() {
  return (
    <div className="max-w-5xl mx-auto md:flex">
      <div>
        <ReservedCar />
        <ReservationInfo />
      </div>
      <PayDetail />
    </div>
  );
}
