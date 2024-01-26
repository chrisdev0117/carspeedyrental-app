import MapPosition from "./MapPosition";

export default function About() {
  return (
    <>
      <section
        id="aboutus-section"
        className="flex-col max-w-5xl px-4 py-5 mx-auto bg-orange-400 md:flex md:flex-row"
      >
        <div className="z-10 flex w-2/3 ml-3 bg-red-100 md:size-96 aspect-square md:ml-10 sm:ml-8">
          <MapPosition />
        </div>

        <div className="z-20 px-10 md:ml-10 md:mt-0 -mt-20 md:block mb-10 ml-20 p-4 bg-[#ffffff70] md:bg-transparent relative">
          <p>About us</p>
          <h1 className="text-2xl font-bold">Who Are We*</h1>
          <div>
            SpeedyRental was founded in 2022 in Salt Lake City Ut, This small
            rental company specializes in long and short term rental. We always
            strive to provide high quality service and accommodate our customers
            with the best of our ability. Contact us today and schedule you next
            trip for business or travel
          </div>
        </div>
      </section>
    </>
  );
}
