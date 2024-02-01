export default function ReservedCar() {
  return (
    <div className="items-center w-full mt-5 text-center">
      <h1 className="my-3 text-2xl font-semibold text-green-600">
        5 Days 1000 MIles Included
      </h1>
      <p className="my-3">Nissan Versa Note</p>
      <p className="my-3">Or Similar</p>
      <img
        src="http://localhost:8000/api/v1/car/file/123123123.png"
        alt="asdf"
        className="mx-auto my-3 w-28"
      />
      <div className="flex justify-between">
        <div className="w-1/2 p-5 border-b-2 border-r-2 border-black border-dotted">
          <p>Pick-up</p>
          <p className="text-sm">1324 Pharaoh Rd, SLC UT 84123</p>
          <p className="text-sm">09:00 Jan 27, 2024</p>
        </div>
        <div className="w-1/2 p-5 border-b-2 border-black border-dotted">
          <p>Return</p>
          <p className="text-sm">1324 Pharaoh Rd, SLC UT 84123</p>
          <p className="text-sm">09:00 Feb 1, 2024</p>
        </div>
      </div>
    </div>
  );
}
