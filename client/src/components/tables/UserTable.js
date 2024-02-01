import { FaEdit, FaHeart, FaRemoveFormat, FaTrash } from "react-icons/fa";
import AuthService from "../../services/auth.service";
export default function UserTable({ userData }) {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex flex-col justify-between">
          <div className="flex-col flex-wrap items-center px-5 py-4 space-y-4 bg-white md:flex-row md:space-y-0">
            <div className="relative">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
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
                id="table-search-users"
                className="block py-2 text-sm text-gray-900 border border-blue-300 rounded-lg ps-10 w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search for users"
              />
            </div>
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="hidden p-4">
                <div className="items-center ">
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
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Orders
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
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
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="">
                    <div className="text-base font-semibold">
                      {user.username}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">{user.phone}</div>
                </td>
                <td className="px-6 py-4">{user.cars.length}</td>
                <td className="flex items-center px-6 py-4">
                  <FaEdit className="hidden mr-1 hover:text-blue-500 hover:cursor-pointer" />
                  <FaTrash
                    className="ml-1 hover:cursor-pointer hover:text-red-500"
                    onClick={() => {
                      AuthService.remove(user.id);
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
