import { reserveFields } from "../../utils/constants/FormFields";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Input from "../../components/common/Input";
import { useLocation, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import CarService from "../../services/car.service";
import AuthService from "../../services/auth.service";

const stripePromise = loadStripe(
  "pk_test_51Odyf8Edv3TCDl3hlFwXcV6hDLGbTYaz0kO6N3H3z3FwKAlj8Qxr6xfHEMoxF2MXedAg6QDDscZDCkIA1Pe01OUe004yrgcAoI"
);

export default function ReservationWrapper({ route, navigate }) {
  const location = useLocation();
  return (
    <Elements stripe={stripePromise}>
      {console.log(location.state.id)}
      <ReservationPage
        currentCarId={location.state.id}
        days={location.state.days}
        startDate={location.state.startDate}
        endDate={location.state.endDate}
        rentalCost={location.state.rentalCost}
        taxesFees={location.state.taxesFees}
      />
    </Elements>
  );
}

function ReservationPage({
  currentCarId,
  days,
  startDate,
  endDate,
  rentalCost,
  taxesFees,
}) {
  const navigate = useNavigate();
  const fields = reserveFields;
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentCar, setCurrentCar] = useState(undefined);
  useEffect(() => {
    const fetchCar = async () => {
      const response = await fetch(
        `http://localhost:8000/api/v1/car/get/${currentCarId}`
      );
      const car = await response.json();
      setCurrentCar(car);
      console.log(car);
    };
    fetchCar();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Call your backend to create the PaymentIntent
    console.log("1111111");
    console.log(currentCar.id);
    console.log(AuthService.getCurrentUser().id);
    console.log(AuthService.getCurrentUser().email);
    console.log(rentalCost + taxesFees);
    console.log(startDate);
    const { data } = await axios.post(
      "http://localhost:8000/api/v1/car/reservate",
      {
        amount: Math.round((rentalCost + taxesFees) * 100),
        carId: currentCar.id,
        userId: AuthService.getCurrentUser().id,
        email: AuthService.getCurrentUser().email,
        startDate: startDate,
        endDate: endDate,
        totalPrice: rentalCost + taxesFees,
      }
    ); // Example amount in cents
    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setError(result.error.message);
      setLoading(false);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        console.log("Payment successful!");
        // Handle successful payment here
        setLoading(false);
        navigate("/myreservations");
      }
    }
  };
  return (
    <div className="max-w-5xl mx-auto md:flex">
      <div>
        {/* <ReservedCar /> */}
        <div className="items-center w-full mt-5 text-center">
          <h1 className="my-3 text-2xl font-semibold text-green-600">
            {days} Days 1000 MIles Included
          </h1>
          <p className="my-3 text-2xl font-bold">
            {currentCar && currentCar.carname}
          </p>
          <p className="my-3">Or Similar</p>
          {console.log(currentCar)}
          <img
            src={
              currentCar &&
              `http://localhost:8000/api/v1/car/file/${currentCar.img_path}`
            }
            alt="asdf"
            className="mx-auto my-3 w-28"
          />
          <div className="flex justify-between">
            <div className="w-1/2 p-5 border-b-2 border-r-2 border-black border-dotted">
              <p>Pick-up</p>
              <p className="text-sm">1324 Pharaoh Rd, SLC UT 84123</p>
              <p className="text-sm">09:00 {startDate}</p>
            </div>
            <div className="w-1/2 p-5 border-b-2 border-black border-dotted">
              <p>Return</p>
              <p className="text-sm">1324 Pharaoh Rd, SLC UT 84123</p>
              <p className="text-sm">09:00 {endDate}</p>
            </div>
          </div>
        </div>
        {/* <ReservationInfo /> */}
        <div className="w-full px-4 py-4 ">
          <h1 className="text-2xl">Your Information</h1>
          {fields.map((field, index) =>
            field.type === "phone" ? (
              <div key={index}>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 19 18"
                    >
                      <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="phone-input"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    required
                    value={AuthService.getCurrentUser().phone}
                  />
                </div>
              </div>
            ) : field.type === "card" ? (
              <div key={index}>
                <div className="flex mb-5">
                  <div className="mr-5">
                    <input
                      type="radio"
                      id="credit"
                      className="mr-2"
                      name="card"
                    />
                    <label htmlFor="credit">Credit Card</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="debit"
                      className="mr-2"
                      name="card"
                    />
                    <label htmlFor="debit">Debit Card</label>
                  </div>
                </div>

                <CardElement className="block w-full px-2 py-3 border-2 rounded-md focus:ring-blue-500 focus:border-blue-500 " />

                {error && <div>{error}</div>}
              </div>
            ) : field.type === "text" ? (
              <Input
                key={field.id}
                //          handleChange={handleChange}
                //          value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
                value={AuthService.getCurrentUser()[field.name]}
              />
            ) : (
              <Input
                key={field.id}
                //          handleChange={handleChange}
                //          value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            )
          )}
        </div>
      </div>
      {/* <PayDetail /> */}
      <div className="p-4 border-t-2 border-l-0 border-black border-dotted md:border-l-2 md:border-t-0">
        <div className="p-3 border-2 border-black border-dotted">
          <span className="float-left">Base Rate:</span>
          <span className="float-right">${rentalCost.toFixed(2)}</span>
          <br />
          <span className="float-left text-blue-500">Taxes & Fees:</span>
          <span className="float-right ">${taxesFees.toFixed(2)}</span>
          <br />
          <span className="float-left text-red-500">
            Refundable Deposit:{" "}
            <small className="text-green-500">Due Upon Pick-Up</small>
          </span>
          <span className="float-right">$65.00</span>
          <br />
        </div>

        <div className="px-3 py-2 my-3 -mx-3 bg-blue-500 rounded-md">
          <span className="float-left">Total Due:</span>
          <span className="float-right">
            ${(rentalCost + taxesFees).toFixed(2)}
          </span>
          <br />
        </div>

        <div className="flex justify-center gap-5 text-center">
          <div>Due Now This is Rental Cost</div>
          <div>${(rentalCost + taxesFees).toFixed(2)}</div>
        </div>

        <div className="px-2 mt-3 border-2 border-black border-dotted rounded-md">
          <Input type="text" isRequired="True" placeholder="Enter promo code" />
          <button
            className="mb-3 -mt-2 w-full rounded-md bg-blue-600 px-1.5 py-2.5 text-md font-bold text-white shadow-sm 
        hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
        focus-visible:outline-blue-600"
          >
            Apply
          </button>
        </div>

        <div className="p-3 mt-3 border-2 border-black border-dotted rounded-md">
          <p>
            If you have no insurance or more then $500 deductible Please
            purchase rental insurance{" "}
            <a href="https://www.rentalcover.com/en/">here</a>
          </p>
          <p>Rental Liability Insurance</p>
          <div className="p-3 bg-yellow-400">
            If you do not have personal insurance coverage, it is mandatory to
            purchase rental and liability insurance
          </div>
        </div>
        <div className="my-3">
          <label htmlFor="no_pi">No I have My Personal Insurance </label>
          <input type="checkbox" id="no_pi" />
        </div>
        <div className="my-3">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            {" "}
            I agree{" "}
            <a
              href="http://localhost:8000/api/v1/car/file/terms&conditions.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Terms and Conditions
            </a>
          </label>
        </div>
        <button
          className="mb-3 -mt-2 w-full rounded-md bg-blue-600 px-1.5 py-2.5 text-md font-bold text-white shadow-sm 
        hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
        focus-visible:outline-blue-600"
          onClick={handleSubmit}
          disabled={!stripe || loading}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
