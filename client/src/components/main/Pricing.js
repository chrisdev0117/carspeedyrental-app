import React from "react";

export default function Pricing({ carData }) {
  return (
    <>
      <section id="prices-section" className="px-8 text-center py-11">
        <h1 className="text-3xl font-semibold">Our Prices</h1>
        <h3 className="mt-6 text-blue-500 font-bold text-1xl animate-[zoom-in-out_2s_infinite] mx-auto w-1/3">
          <span>
            Go unlimited by purchasing unlimited mileage only for $13 a day
          </span>
        </h3>
        <div className="max-w-5xl mx-auto mt-8 ">
          <div className="table-header-group">
            <div className="table-cell border-b-2 border-gray-400">&nbsp;</div>
            <div className="table-cell border-b-2 border-gray-400">&nbsp;</div>
            <div className="table-cell px-3 py-6 bg-orange-400">
              Long Term Rental 20+day
              <p></p>
              <small>*Includes 300 miles/per day</small>
              <p></p>
            </div>

            <div className="hidden px-3 py-6 bg-indigo-400 sm:table-cell ">
              Per Day Rate 10+day
              <p></p>
              <small>*Includes 250 miles/per day</small>
              <p></p>
            </div>

            <div className="hidden px-3 py-6 bg-blue-400 md:table-cell ">
              Per Day
              <p></p>
              <small>*Includes 200 miles/per day</small>
              <p></p>
            </div>
          </div>

          {carData.map((car, index) => (
            // <div className="flex p-5 border-b-2 border-gray-200">
            <div className="table-row-group" key={index}>
              <div className="table-cell p-4 border-b-2 border-gray-400">
                <img
                  src={car.img_path}
                  alt={car.carname}
                  className="w-[200px] h-[131px]"
                />
                <p>${car.per_20days}/day</p>
              </div>
              <div className="table-cell p-4 align-middle border-b-2 border-gray-400 ">
                <div className="">
                  <b>{car.carname}</b>
                  <p>Or similiar</p>
                </div>
              </div>
              <div className="table-cell align-middle bg-gray-200 border-b-2 border-white">
                <span className="text-xl text-blue-400">
                  $&nbsp;{car.per_20days}
                </span>
                <span>/per day</span>
              </div>
              <div className="hidden align-middle bg-gray-200 border-2 border-white sm:table-cell">
                <span className="text-xl text-blue-400">
                  $&nbsp;{car.per_10days}
                </span>
                <span>/per day</span>
              </div>
              <div className="hidden align-middle bg-gray-200 border-2 border-white md:table-cell">
                <span className="text-xl text-blue-400">
                  $&nbsp;{car.per_day}
                </span>
                <span>/per day</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
