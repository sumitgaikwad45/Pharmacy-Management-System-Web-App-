import httpClient from "../../http-commonDr";

import axios from "axios";


const getAll = () => {
    return httpClient.get('/doctor/viewdrugs');
}

const get = id => {
    return httpClient.get(`/doctor/viewbyId/${id}`);
}


const addDruginorder = data => {
    return httpClient.post("/doctor/addOrder", data);
}


const orderlist = () => {
    return httpClient.get("/doctor/viewOrders");
}
const doctorPickUpList = () => {
    return httpClient.get('/doctor/pickuplist');
}

const registerDoctor = data => {
    return axios.post("http://localhost:9090/doctor-service/register/reg", data);
}

export default { getAll, get, registerDoctor, addDruginorder, orderlist, doctorPickUpList };
