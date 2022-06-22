import axios from "axios";

 
export default axios.create({

    baseURL: 'http://localhost:9090/admin-service',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ localStorage.getItem("SavedToken")
    }
});