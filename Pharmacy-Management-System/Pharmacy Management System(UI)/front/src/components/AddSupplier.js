import { useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Drugservice from "../services/AdminService/Drugservice";

const AddSupplier = () => {
    const[name, setname] = useState('');
    const[email, setemail] = useState('');
    const[phoneNumber, setphoneNumber] = useState('');
    const[drugName, setdrugName] = useState('');
    const[drugPrice, setdrugPrice] = useState('');
    const {id} = useParams();

let navigate=useNavigate();

    const saveSupplier = (e) => {
        e.preventDefault();
        
        const supplier = {name, email, phoneNumber,drugName, drugPrice, id};
          {
            //create
            Drugservice.AddSupplier(supplier)
            .then(response => {
                console.log("supplier added successfully", response.data);
                navigate("/supplier/list");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
           Drugservice.get(id)
                .then(supplier => {
                    setname(supplier.data.name);
                    setemail(supplier.data.email);
                    setphoneNumber(supplier.data.phoneNumber);
                    setdrugName(supplier.data.drugName);
                    setdrugPrice(supplier.data.drugPrice);
                    
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className='editbody'>
            
            <div id="supg"></div>
            <div className="admin-login-form-container">
            <form>
            <div className='admin-login-form-header'>Add Supplier</div>
                <div className="form-field natv">
                    <input 
                        type="text" 
                        className='iedit'
                        id="Supplier Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder="Enter name"
                        required
                    />

                </div>
                <div className="form-field natv">
                    <input 
                        type="text" 
                        className='iedit'
                        id="Supplier Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Enter Email"
                    />

                </div>
                <div className="form-field natv">
                    <input 
                        type="text" 
                        className='iedit'
                        id="Supplier Contact"
                        value={phoneNumber}
                        onChange={(e) => setphoneNumber(e.target.value)}
                        placeholder="Enter PhoneNumber"
                    />

                </div>
                <div className="form-field natv">
                    <input 
                        type="text" 
                        className='iedit'
                        id="Drug Name"
                        value={drugName}
                        onChange={(e) => setdrugName(e.target.value)}
                        placeholder="Enter drug Name"
                    />

                </div>
                <div className="form-field natv">
                    <input 
                        type="text" 
                        className='iedit'
                        id="Drug price"
                        value={drugPrice}
                        onChange={(e) => setdrugPrice(e.target.value)}
                        placeholder="Enter drug price"
                    />

                </div>

                
                <div className="form-field natv">
                    <button onClick={(e) => saveSupplier(e)} className="btn wbit">Save</button>
                </div>
            </form>
            {/* <Link  className='dlink' to="/supplier/list">Back to List</Link> */}
        </div>
        </div>
    )
}

export default AddSupplier;