export default function Contact({ sectionref }) {
  return (
    <div
      className="flex-col px-4 py-10 text-white bg-black sm:flex sm:flex-row"
      id="contact-section"
      ref={sectionref}
    >
      <div className="w-full text-center">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          CAR<small className="text-orange-400">SPEEDYRENTAL</small>
        </h2>
        <p className="mb-4 text-gray-500 ">
          <a
            href="http://localhost:8000/api/v1/car/file/terms&conditions.pdf"
            target="_blank"
          >
            Terms and Conditions.
          </a>
        </p>
        <p className="mb-4 text-gray-500 ">Visit Us On Facebook</p>
      </div>
      <div className="w-full text-center">
        <h2 className="mb-2 text-2xl font-semibold">Have a Questions?</h2>
        <p className="mb-2 text-gray-500 ">+1 801 573 4248</p>
        <p className="mb-2 text-gray-500 ">carspeedyrental@gmail.com</p>
        <span className="block mb-2 text-gray-500 ">
          4541S 700E, Suit 200B Millcreek UT, 84107
        </span>
        <span className="mb-2 text-gray-500 ">Mon - Sat, 8:00am - 7:00pm</span>
      </div>
    </div>
  );
}
