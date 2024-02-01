import React from "react";

export default function Create_UpdateCarModal({
  default_modal_button,
  default_id,
  default_title,
  default_carname,
  default_per_20days,
  default_per_10days,
  default_per_day,
  default_carimg,
  default_button_text,
}) {
  const [showModal, setShowModal] = React.useState(false);
  const [file, setFile] = React.useState(default_carimg);
  const [carname, setCarName] = React.useState(default_carname);
  const [per_20days, setPer20Days] = React.useState(default_per_20days);
  const [per_10days, setPer10Days] = React.useState(default_per_10days);
  const [per_day, setPerDay] = React.useState(default_per_day);

  function handleChange(event) {
    setFile(event.target.files[0]);
    console.log(typeof event.target.files[0] === typeof {});
    console.log(event.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("carname", carname);
    formData.append("per_20days", per_20days);
    formData.append("per_10days", per_10days);
    formData.append("per_day", per_day);
    if (typeof file !== typeof {}) {
      const url = `http://localhost:8000/api/v1/car/file/${file}`;
      fetch(url).then(async (response) => {
        const contentType = response.headers.get("content-type");
        const blob = await response.blob();
        setFile(new File([blob], file, { contentType }));
        // access file here
      });
    }
    formData.append("carimg", file);

    if (default_button_text === "Add") {
      await fetch("http://localhost:8000/api/v1/car/create", {
        method: "post",
        body: formData,
      })
        .then((r) => console.log(r.json()))
        .catch((err) => console.error(err));
    } else {
      formData.append("id", default_id);
      await fetch("http://localhost:8000/api/v1/car/update", {
        method: "post",
        body: formData,
      })
        .then((r) => console.log(r.json()))
        .catch((err) => console.error(err));
    }
    setShowModal(false);
    //window.location.reload();
  };

  return (
    <div>
      <button
        id="dropdownActionButton"
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {default_modal_button}
      </button>

      {showModal && (
        <div
          id="editUserModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#20202020]"
        >
          <div className="relative w-full max-w-2xl max-h-full mx-auto mt-36">
            <form
              className="relative bg-white rounded-lg shadow dark:bg-gray-700"
              onSubmit={handleSubmit}
            >
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {default_title}
                </h3>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="editUserModal"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 row-span-1 sm:col-span-3">
                    <label
                      htmlFor="carname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Car Name
                    </label>
                    <input
                      type="text"
                      name="carname"
                      id="carname"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Kia Rio"
                      required=""
                      onChange={(e) => setCarName(e.target.value)}
                      value={carname}
                    />
                  </div>

                  <div className="col-span-6 row-span-4 sm:col-span-3">
                    <label
                      htmlFor="carimg"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Car Image
                    </label>
                    <img
                      src={
                        typeof file === typeof {}
                          ? URL.createObjectURL(file)
                          : file
                          ? `http://localhost:8000/api/v1/car/file/${file}`
                          : "http://localhost:8000/api/v1/car/file/original.png"
                      }
                      alt="sdf"
                      className="object-contain w-full m-2 aspect-square"
                    />
                    <input
                      type="file"
                      name="carimg"
                      id="carimg"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={handleChange}
                      alt="carimg"
                      accept="image/*"
                    />
                  </div>

                  <div className="col-span-6 row-span-1 sm:col-span-3">
                    <label
                      htmlFor="per_20days"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      PRICE PER 20 DAYS($)
                    </label>
                    <input
                      type="text"
                      name="per_20days"
                      id="per_20days"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0.00"
                      required=""
                      onChange={(e) => setPer20Days(e.target.value)}
                      value={per_20days}
                    />
                  </div>
                  <div className="col-span-6 row-span-1 sm:col-span-3">
                    <label
                      htmlFor="per_10days"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      PRICE PER 10 DAYS($)
                    </label>
                    <input
                      type="text"
                      name="per_10days"
                      id="per_10days"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0.00"
                      required=""
                      onChange={(e) => setPer10Days(e.target.value)}
                      value={per_10days}
                    />
                  </div>
                  <div className="col-span-6 row-span-1 sm:col-span-3">
                    <label
                      htmlFor="per_day"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      PRICE PER DAY($)
                    </label>
                    <input
                      type="text"
                      name="per_day"
                      id="per_day"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0.00"
                      required=""
                      onChange={(e) => setPerDay(e.target.value)}
                      value={per_day}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6 space-x-3 border-t border-gray-200 rounded-b rtl:space-x-reverse dark:border-gray-600">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {default_button_text}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
