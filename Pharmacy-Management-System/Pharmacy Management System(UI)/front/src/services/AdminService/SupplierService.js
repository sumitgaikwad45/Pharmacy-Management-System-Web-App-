import httpClient from "../../http-common";

import axios from "axios";


const getAllSupplier = () => {
    return httpClient.get('/admin//viewsuppliers');
}


const addSupplier = data => {
    return httpClient.post("/admin/addsuppliers", data);
}


const get = id => {
    return httpClient.get(`/admin/finddrugbyid/${id}`);
}

const getByName = name =>{
    return httpClient.get(`/admin/viewdrugs/${name}`);
}

const update = data => {
    return httpClient.put('/admin/editdrugs', data);
}

const remove = id => {
    return httpClient.delete(`/admin/deletedrug/${id}`);
}
export default { getAllSupplier, addSupplier, update, remove, get, getByName };