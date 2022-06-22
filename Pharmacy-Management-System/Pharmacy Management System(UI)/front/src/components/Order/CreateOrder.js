import { useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import DrugServiceDr from "../../services/Doctor/DrugServiceDr";
 



const CreateOrder = () => {
    const[doctor, setdrname] = useState('');
    const[name, setname] = useState('');
    const[price, setprice] = useState('');
    const {id} = useParams();
let navigate=useNavigate();
    const saveDruginorder = (e) => {
        e.preventDefault();
        
        const order = {doctor,name, price, id};
        if (id) {
            DrugServiceDr.addDruginorder(order)
            .then(response => {
                console.log("drug added successfully", response.data);
                navigate("/orderlist");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        } 
    }

    useEffect(() => {
        if (id) {
            DrugServiceDr.get(id)
                .then(order => {

                    setname(order.data.name);
                    setprice(order.data.price);
                    
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        
        <div className='bodyform'>
            <div id="bg"></div>
            <div className='login-form-container'>
            <form>
            <div className="form-field inside">
                    <input 
                        type="text" 
                        className='editin'
                        id="Doctor Name"
                        value={doctor}
                        onChange={(e) => setdrname(e.target.value)}
                        placeholder="Enter name" 
                        required/>
                   </div>

                <div className="form-field inside">
                    <li   className='editin'>
                    {name}
                    </li>

                </div>
                <div className="form-field inside">
                <li  className='editin'>
                    {price}
                    </li>

                </div>
                
                <div class="form-field inside">
                    <button onClick={(e) => saveDruginorder(e)} className="btn editb" >Confirm details</button>
                </div>
            </form>
            {/* <Link to="/list">Back to List</Link> */}
        </div>
        </div>
        
    )
}

export default CreateOrder;