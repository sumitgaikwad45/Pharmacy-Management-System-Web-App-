import React from 'react';
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Drugservice from './Drugservice';


const AdminSignUp = () => {
    const [name, setname] = useState('');
    const [contact, setcontact] = useState('');
    const [email, setemail] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const { id } = useParams();

    let navigate = useNavigate();

    const regAdmin = (e) => {
        e.preventDefault();

        const admindata = { name, contact, email, username, password };

        //create
        Drugservice.registerAdmin(admindata)
            .then(response => {
                console.log("Admin register successfully", response.data);
                navigate("/list");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })

    }


    return (
        <div className='editbody'>
           <div id="ag"></div>
           <div className="admin-login-form-container">
            <form>
            <div className='admin-login-form-header'>Register New Admin</div>
                <div className="form-field natv">
                    <input
                        type="text"
                        className='iedit'
                        id="Admin Name"
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
                        id=" Admin contact"
                        value={contact}
                        onChange={(e) => setcontact(e.target.value)
                        }
                        placeholder="Enter Contact" required
                    />

                </div>

                <div className="form-field natv">
                    <input
                        type="email"
                        className='iedit'
                        id="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Enter Email"
                        required
                    />

                </div>
                <div className="form-field natv">
                    <input
                        type="text"
                        className='iedit'
                        id="username"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        placeholder="Create Username"
                        required
                    />

                </div>
                
                <div className="form-field natv">
                    <input
                        type="password"
                        className='iedit'
                        id="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="Create Password"
                        autoComplete=''
                        required
                    />

                </div>
                <div className="form-field natv">
                    <button className="btn wbit" onClick={(e) => regAdmin(e)} >Save</button>
                </div>
            </form>
           </div>
            
        </div>
    )
}
export default AdminSignUp;