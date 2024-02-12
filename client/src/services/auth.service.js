import axios from "axios";

const API_AUTH_URL = "http://35.173.248.65/api/v1/auth/";

class AuthService {
  static async getAllUsers() {
    return axios.get(API_AUTH_URL + `all`).then((e) => {
      console.log("22222222");
      console.log(e.data);
      return e.data;
    });
  }

  static login(email, password) {
    console.log(email, password);

    return axios
      .post(API_AUTH_URL + "signin", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  static logout() {
    localStorage.removeItem("user");
  }

  static register(username, email, phone, password) {
    console.log(username);
    return axios.post(API_AUTH_URL + "signup", {
      username,
      email,
      phone,
      password,
    });
  }

  static getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  static remove(id) {
    console.log(id);
    return axios
      .delete(API_AUTH_URL + `delete/${id}`, {
        id,
      })
      .then((response) => {
        console.log(response);
      });
  }
}

export default AuthService;
