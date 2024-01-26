import React from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ carData }) {
  const [showModal, setShowModal] = React.useState(false);
  const [currentCarIndex, setCurrentCarIndex] = React.useState(0);
  const navigate = useNavigate();
  return (
    <>
      <button
        className="block mt-4 w-full rounded-md bg-orange-600 px-3 py-1.5 text-lg text-white shadow-sm 
        hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
        focus-visible:outline-orange-600"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Get Estimate
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="text-3xl font-semibold">Choose A Car</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex p-6">
                  <div className="float-left overflow-auto w-52 h-96">
                    {carData.map((car, index) => (
                      <div
                        className={`p-2 m-2 border-2 rounded-md h-36 cursor-pointer ${
                          currentCarIndex === index && "bg-blue-500"
                        }`}
                        onClick={() => setCurrentCarIndex(index)}
                      >
                        <span
                          className={`${
                            currentCarIndex === index && "text-white"
                          }`}
                        >
                          {car.carname}
                        </span>
                        <img
                          src={car.img_path}
                          alt={car.carname}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="float-right p-5 min-w-24 w-96">
                    <div className="mb-3 text-green-600">
                      <span className="float-left">Unlimted Miles?</span>
                      <input type="checkbox" className="float-right w-5 h-5" />
                      <br />
                      <span className="float-left">Prepaid refuel</span>
                      <input type="checkbox" className="float-right w-5 h-5" />
                      <br />

                      <span className="float-left">Days:</span>
                      <span className="float-right">5</span>
                      <br />

                      <span className="float-left">Miles Included:</span>
                      <span className="float-right">1000</span>
                      <br />
                    </div>
                    <div className="mb-3">
                      <span className="float-left">Rental Cost:</span>
                      <span className="float-right">
                        ${(carData[currentCarIndex].per_day * 5).toFixed(2)}
                      </span>
                      <br />

                      <span className="float-left">Taxes and Fees:</span>
                      <span className="float-right">
                        $
                        {(carData[currentCarIndex].per_day * 5 * 0.532).toFixed(
                          2
                        )}
                      </span>
                      <br />

                      <span className="float-left">Young Driver Fee:</span>
                      <span className="float-right">$0</span>
                      <br />
                    </div>

                    <div className="mb-3 text-red-500">
                      <span className="float-left">Refundable Deposit:</span>
                      <span className="float-right">$65.00</span>
                      <br />
                    </div>
                    <div className="px-3 mb-3 -mx-3 text-2xl text-white bg-gray-600 rounded-md">
                      <span className="float-left">Sub-Total:</span>
                      <span className="float-right">
                        $
                        {(
                          carData[currentCarIndex].per_day * 5 * 1.532 +
                          65
                        ).toFixed(2)}
                      </span>
                      <br />
                    </div>
                    <div className="mb-3 text-red-500">
                      <span className="float-left">Refund:</span>
                      <span className="float-right">-$65.00</span>
                      <br />
                    </div>

                    <div className="px-3 mb-3 -mx-3 text-3xl text-white bg-blue-400 rounded-md">
                      <span className="float-left">Total Cost:</span>
                      <span className="float-right">
                        $
                        {(carData[currentCarIndex].per_day * 5 * 1.532).toFixed(
                          2
                        )}
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      navigate("/reservation");
                    }}
                  >
                    Book this trip
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
