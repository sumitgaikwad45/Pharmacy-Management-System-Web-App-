import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Drugservice from "../services/AdminService/Drugservice";

const AddDrug = () => {
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const { id } = useParams();
    let navigate = useNavigate();

    const saveDrug = (e) => {
        e.preventDefault();

        const drug = { name, price, id };
        if (id) {
            //update
            Drugservice.update(drug)
                .then(response => {
                    console.log('Drug data updated successfully', response.data);
                    navigate("/list");
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        } else {
            //create
            Drugservice.create(drug)
                .then(response => {
                    console.log("drug added successfully", response.data);
                    navigate("/list");
                })
                .catch(error => {
                    console.log('something went wroing', error);
                })
        }
    }

    useEffect(() => {
        if (id) {
            Drugservice.get(id)
                .then(drug => {
                    setname(drug.data.name);
                    setprice(drug.data.price);

                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return (
        <div>
        <div className='editbody'>
            <div id="dg"></div>
            <div className="admin-login-form-container">
            <form>
            <div className='admin-login-form-header'>Add Drug</div>
                <div className="form-field natv">
                    <input
                        type="text"
                        className='iedit'
                        id="Drug Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-field natv">
                    <input
                        type="text"
                        className='iedit'
                        id="Drug Price"
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                        placeholder="Enter Price"
                    />
                </div>

                <div className="form-field natv" >
                    <button onClick={(e) => saveDrug(e)} className="btn wbit">Save</button>
                </div>
            </form>
            {/* <Link className='dlink' to="/list">Back to List</Link> */}
        </div>
        </div>
        </div>
        
        
    )
}

export default AddDrug;