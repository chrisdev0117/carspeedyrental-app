import Modal from "./Modal";

export default function Home({ carData }) {
  return (
    <>
      <div
        id="booking-section"
        style={{ backgroundImage: `url('/img/background.png')` }}
        className="bg-[#808080] py-11 px-4"
      >
        <div className="flex justify-center max-w-5xl mx-auto">
          <div className="bg-blue-500 h-[500px] pt-8 items-center justify-center text-center w-full max-w-[460px] md:w-1/2 mx-2 md:mx-0 rounded-l-lg  shadow-lg shadow-black">
            <h2 className="pb-2 text-2xl font-bold text-white">
              Make Your Ride
            </h2>
            <label className="block pb-2 text-sm text-orange-300">
              Rent a Car Power your Travel
            </label>
            <label className="block pb-2 text-white">
              Pick-up/Drop-off location
            </label>
            <div className="px-10 pb-2">
              <div className="mt-2">
                <input
                  type="text"
                  value="3975 S 1333 W , Salt Lake City, UT"
                  readOnly
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                />
              </div>
            </div>
            <label className="block pb-2 text-white">Pick-up Date</label>
            <div className="flex gap-4 px-10 pb-4">
              <input
                type="date"
                className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                min={new Date().toISOString().slice(0, 10)}
                defaultValue={new Date().toISOString().slice(0, 10)}
              />
              <input
                type="time"
                className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                defaultValue="09:00"
              />
            </div>

            <label className="block pb-2 text-white">Drop-off Date</label>
            <div className="flex gap-4 px-10 pb-4">
              <input
                type="date"
                className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                min={new Date().toISOString().slice(0, 10)}
                defaultValue={new Date(
                  new Date().getTime() + 5 * 24 * 60 * 60 * 1000
                )
                  .toISOString()
                  .slice(0, 10)}
              />
              <input
                type="time"
                className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                defaultValue="09:00"
              />
            </div>

            <label className="block pb-2 text-white">Your age</label>
            <div className="px-10">
              <select className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>+25</option>
              </select>
              <Modal carData={carData} />
            </div>
          </div>

          <div className="flex-col w-1/2 bg-white h-[500px] items-center justify-center text-center hidden md:flex  rounded-r-lg  shadow-lg shadow-black">
            <h2 className="pb-2 mb-8 text-2xl font-bold text-gray-700">
              Call us reserve your car now
            </h2>
            <div className="flex justify-center px-5 mx-auto mb-5 gap-7">
              <div>
                <img
                  src="/img/long_term.png"
                  alt="long term"
                  className="mb-5 size-36"
                />
                <p>Long Term Car Rental</p>
              </div>
              <div>
                <img
                  src="/img/daily.png"
                  alt="daily"
                  className="mb-5 size-36"
                />
                <p>Daily Car Rental</p>
              </div>
            </div>
            <div className="justify-center">
              <button className="w-4/5 mt-2 mb-3 rounded-md bg-blue-600 px-3 py-1.5 text-lg text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Call us At: 801-573-4248
              </button>
              <h4 className="font-extrabold text-red-600">
                Minimum of 4 Days Rental required
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
