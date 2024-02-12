import axios from "axios";

const API_CAR_URL = "http://35.173.248.65/api/v1/car/";

class CarService {
  static getAllCars() {
    return axios.get(API_CAR_URL + `allcars`);
  }

  static getAllOrders() {
    return axios.get(API_CAR_URL + `allorders`);
  }

  static getCurrentCar(id) {
    return axios.get(API_CAR_URL + `get/${id}`);
  }
  static create(car_name, price_per20days, price_10days, price_perday) {
    console.log(car_name);
    return axios.post(API_CAR_URL, {
      car_name,
      price_per20days,
      price_10days,
      price_perday,
    });
  }
  static remove(id) {
    console.log(id);
    return axios
      .delete(API_CAR_URL + `delete/${id}`, {
        id,
      })
      .then((response) => {
        console.log(response);
      });
  }
}

export default CarService;
