import Input from "../common/Input";

export default function PayDetail() {
  return (
    <div className="p-4 border-t-2 border-l-0 border-black border-dotted md:border-l-2 md:border-t-0">
      <div className="p-3 border-2 border-black border-dotted">
        <span className="float-left">Base Rate:</span>
        <span className="float-right">$111.00</span>
        <br />
        <span className="float-left text-blue-500">Taxes & Fees:</span>
        <span className="float-right ">$61.18</span>
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
        <span className="float-right">$172.18</span>
        <br />
      </div>

      <div className="flex justify-center gap-5 text-center">
        <div>Due Now This is Rental Cost</div>
        <div>$172.18</div>
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
          If you have no insurance or more then $500 deductible Please purchase
          rental insurance <a href="https://www.rentalcover.com/en/">here</a>
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
      >
        Pay Now
      </button>
    </div>
  );
}
