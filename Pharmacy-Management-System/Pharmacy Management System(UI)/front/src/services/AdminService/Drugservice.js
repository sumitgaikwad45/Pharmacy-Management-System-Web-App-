import httpClient from "../../http-common";

import axios from "axios";


const getAll = () => {
    return httpClient.get('/admin/viewdrugs');
}


const create = data => {
    return httpClient.post("/admin/adddrugs", data);
}


const get = id => {
    return httpClient.get(`/admin/viewbyId/${id}`);
}

const getByName = name => {
    return httpClient.get(`/admin/viewdrugs/${name}`);
}

const update = data => {
    return httpClient.put('/admin/editdrugs', data);
}

const remove = id => {
    return httpClient.delete(`/admin/deletedrug/${id}`);
}

const viewSupplier = () => {
    return httpClient.get("/admin/viewsuppliers")
}

const AddSupplier = data => {
    return httpClient.post("/admin/addsuppliers", data);
}

const deleteSupplier = id => {
    return httpClient.delete(`/admin/deletesupplier/${id}`);
}

const deleteorder = id => {
    return httpClient.delete(`/admin//deleteOrder/${id}`);
}

const addtopickup = data => {
    return httpClient.post("/admin/ordertopick", data);
}


const orderById = id => {
    return httpClient.get(`/admin/getorder/${id}`);
}

const PickUpList = () => {
    return httpClient.get('/admin/pickuplist');
}

const viewOrders = () => {
    return httpClient.get("/admin/viewOrders")
}


const registerAdmin = data => {
    return axios.post("http://localhost:9090/admin-service/register/reg", data);
}

export default { getAll, create, update, remove, get, getByName, viewSupplier, AddSupplier, deleteSupplier, registerAdmin, deleteorder, addtopickup, orderById, PickUpList, viewOrders };

