import axios from "axios";
class AuthServiceDr {

  login(username, password) {

    const API_URL = "http://localhost:9090/doctor-service/register/auth";
    return axios
      .post(API_URL, {
        username,
        password
      })
      .then(response => {
        const token1 = response.data;
        localStorage.setItem("SavedToken1", token1)
        console.log(token1);
      });
  }



  logout() {
    localStorage.removeItem("SavedToken1");
  }

  getCurrentUser() {
    return localStorage.getItem('SavedToken1');
  };

}

export default new AuthServiceDr();