import CarService from "../../services/car.service";
import Create_UpdateCarModal from "../modals/Create_UpdateCarModal";
import { FaEdit, FaHeart, FaRemoveFormat, FaTrash } from "react-icons/fa";

export default function CarTable({ carData }) {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex flex-col flex-wrap items-center justify-between py-4 pl-5 space-y-4 bg-white md:flex-row md:space-y-0">
          <div>
            <Create_UpdateCarModal
              default_modal_button={"Add New Car"}
              default_button_text={"Add"}
              default_title={"Add New Car"}
            />
            <div
              id="dropdownAction"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <button
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownActionButton"
              >
                Add car
              </button>
            </div>
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative pr-10">
            <div className="absolute inset-y-0 flex items-center hidden pointer-events-none start-0 ps-3">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-cars"
              className="hidden py-2 text-sm text-gray-900 border border-blue-300 rounded-lg ps-10 w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search for cars"
            />
          </div>
        </div>
        <table className="w-full text-sm text-center text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="hidden p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="w-1/4 px-6 py-3">
                Name
              </th>
              <th scope="col" className="w-1/6 px-6 py-3">
                Price per 20 days
              </th>
              <th scope="col" className="w-1/6 px-6 py-3">
                Price per 10 days
              </th>
              <th scope="col" className="w-1/6 px-6 py-3">
                Price per day
              </th>
              <th scope="col" className="px-6 py-3">
                Rented user
              </th>
              <th scope="col" className="px-6 py-3">
                Start Date
              </th>
              <th scope="col" className="px-6 py-3">
                End Date
              </th>
              <th scope="col" className="px-6 py-3">
                Rented Price
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {carData.map((car, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={index}
              >
                <td className="hidden w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex flex-wrap items-center w-full px-2 py-4 overflow-x-auto text-center text-gray-900 whitespace-nowrap "
                >
                  <img
                    className="h-10 rounded-full max-w-20"
                    src={`http://35.173.248.65/api/v1/car/file/${car.img_path}`}
                    alt="Jese"
                  />
                  <div className="absolute pl-16">
                    <div className="text-base font-semibold">{car.carname}</div>
                  </div>
                </th>
                <td className="px-6 py-4">{car.per_20days.toFixed(2)}$</td>
                <td className="px-6 py-4">{car.per_10days.toFixed(2)}$</td>
                <td className="px-6 py-4">{car.per_day.toFixed(2)}$</td>
                <td className="px-6 py-4 font-bold">
                  {car.user.username !== "None" ? car.user.username : "-"}
                </td>
                <td className="px-6 py-4 font-bold">
                  {car.user.username !== "None" ? car.startDate : "-"}
                </td>
                <td className="px-6 py-4 font-bold">
                  {car.user.username !== "None" ? car.endDate : "-"}
                </td>
                <td className="px-6 py-4 font-bold">
                  {car.user.username !== "None"
                    ? car.totalPrice.toFixed(2) + "$"
                    : "-"}
                </td>
                <td className="flex items-center px-6 py-4">
                  <Create_UpdateCarModal
                    default_modal_button={
                      <FaEdit className="mr-1 hover:text-blue-500 hover:cursor-pointer" />
                    }
                    default_id={car.id}
                    default_button_text={"Update"}
                    default_title={"Update Car"}
                    default_carimg={car.img_path}
                    default_per_10days={car.per_10days}
                    default_per_20days={car.per_20days}
                    default_per_day={car.per_day}
                    default_carname={car.carname}
                  />

                  <FaTrash
                    className="ml-1 hover:cursor-pointer hover:text-red-500"
                    onClick={() => {
                      CarService.remove(car.id);
                      window.location.reload();
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
