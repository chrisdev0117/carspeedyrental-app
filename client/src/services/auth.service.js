import axios from "axios";

const API_AUTH_URL = "http://localhost:8000/api/v1/auth/";

class AuthService {
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

  static register(username, email, password) {
    console.log(username);
    alert(username);
    return axios.post(API_AUTH_URL + "signup", {
      username,
      email,
      password,
    });
  }

  static getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default AuthService;
