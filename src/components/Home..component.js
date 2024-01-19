import GoogleMapReact from "google-map-react";
import Footer from "./Footer.component";

export default function Home() {
  const MyMarker = ({ text, tooltip }) => (
    <div className="circle">
      <span className="circleText" title={tooltip}>
        {text}
      </span>
    </div>
  );

  const points = [
    { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
    { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
    { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 },
  ];
  const car_data = [
    {
      path: "/img/cars/1.png",
      vpd: "20.00",
      name: "Kia Rio",
      per_day_rate: "21.00",
      per_day: "22.00",
    },
    {
      path: "/img/cars/2.png",
      vpd: "20.00",
      name: "Nissan Versa Note",
      per_day_rate: "21.00",
      per_day: "22.20",
    },
    {
      path: "/img/cars/3.png",
      vpd: "20.00",
      name: "Chevy Malibu",
      per_day_rate: "23.00",
      per_day: "24.00",
    },
    {
      path: "/img/cars/4.png",
      vpd: "22.30",
      name: "Hyundai Accent 1",
      per_day_rate: "23.40",
      per_day: "24.40",
    },
    {
      path: "/img/cars/5.png",
      vpd: "23.70",
      name: "Buick Encore",
      per_day_rate: "24.70",
      per_day: "25.70",
    },
    {
      path: "/img/cars/6.png",
      vpd: "24.5",
      name: "Toyota Avalon",
      per_day_rate: "25.50",
      per_day: "26.50",
    },
    {
      path: "/img/cars/7.png",
      vpd: "25.00",
      name: "2017 Chevy Equinox",
      per_day_rate: "26.00",
      per_day: "27.00",
    },
    {
      path: "/img/cars/8.png",
      vpd: "26.00",
      name: "Chrysler Town&Country",
      per_day_rate: "27.00",
      per_day: "28.00",
    },
    {
      path: "/img/cars/9.png",
      vpd: "26.90",
      name: "2019 Chevrolet Equinox",
      per_day_rate: "21.00",
      per_day: "22.00",
    },
    {
      path: "/img/cars/1.png",
      vpd: "20.00",
      name: "Kia Rio",
      per_day_rate: "27.90",
      per_day: "28.90",
    },
    {
      path: "/img/cars/1.png",
      vpd: "27.00",
      name: "Vw Routan",
      per_day_rate: "28.00",
      per_day: "29.00",
    },
  ];
  return (
    <div className="home">
      <div className="home-section container" id="booking-section">
        <div className="make-ride">
          <h2>Make Your Ride</h2>
          <label className="text-orange">Rent a Car Power your Travel</label>
          <label>Pick-up/Drop-off location</label>
          <div className="control-group">
            <input type="text" value="3975 S 1333 W , Salt Lake City, UT" />
          </div>
          <label>Pick-up Date</label>
          <div className="control-group">
            <input type="date" />
            <input type="time" />
          </div>

          <label>Drop-off Date</label>
          <div className="control-group">
            <input type="date" />
            <input type="time" />
          </div>

          <label>Your age</label>
          <div className="control-group">
            <select>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>+25</option>
            </select>
          </div>

          <button>Get Estimate</button>
        </div>
        <div className="call-us">
          <h3>Call us reserve your car now</h3>
          <div className="rental-group">
            <div className="rental">
              <img src="/img/long_term.png" alt="long term" />
              <p>Long Term Car Rental</p>
            </div>
            <div className="rental">
              <img src="/img/daily.png" alt="daily" />
              <p>Daily Car Rental</p>
            </div>
          </div>
          <button>Call us At: 801-573-4248</button>
          <h4>Minimum of 4 Days Rental required</h4>
        </div>
      </div>

      <div className="prices-section container" id="prices-section">
        <h1>Our Prices</h1>
        <h3 className="animated-title">
          Go unlimited by purchasing unlimited mileage only for $13 a day
        </h3>
        <table>
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>
              Long Term Rental 20+day
              <p></p>
              <small>*Includes 300 miles/per day</small>
              <p></p>
            </th>

            <th>
              Per Day Rate 10+day
              <p></p>
              <small>*Includes 250 miles/per day</small>
              <p></p>
            </th>

            <th>
              Per Day
              <p></p>
              <small>*Includes 200 miles/per day</small>
              <p></p>
            </th>
          </tr>
          {car_data.map((car, index) => (
            <tr>
              <td>
                <img src={car.path} alt={car.name} />
                <p>${car.vpd}/day</p>
              </td>
              <td>
                <p>
                  <b>{car.name}</b>
                </p>
                Or similiar
              </td>
              <td>
                <span className="price">$&nbsp;{car.vpd}</span>
                <span className="unit">/per day</span>
              </td>
              <td>
                <span className="price">$&nbsp;{car.per_day_rate}</span>
                <span className="unit">/per day</span>
              </td>
              <td>
                <span className="price">$&nbsp;{car.per_day}</span>
                <span className="unit">/per day</span>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="contact-section" id="aboutus-section">
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDiKc4HxX5G7EfneIZBN_Hlk2_luoT_yvo",
              language: "en",
              region: "US",
            }}
            defaultCenter={{ lat: 51.506, lng: -0.169 }}
            defaultZoom={15}
          >
            {points.map(({ lat, lng, id, title }) => {
              return (
                <MyMarker
                  key={id}
                  lat={lat}
                  lng={lng}
                  text={id}
                  tooltip={title}
                />
              );
            })}
          </GoogleMapReact>
        </div>
        <div className="about-us" id="footer-section">
          <div className="about-us-content">
            <p>About us</p>
            <h2>Who Are We*</h2>
            <p>
              SpeedyRental was founded in 2022 in Salt Lake City Ut, This small
              rental company specializes in long and short term rental. We
              always strive to provide high quality service and accommodate our
              customers with the best of our ability. Contact us today and
              schedule you next trip for business or travel
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
