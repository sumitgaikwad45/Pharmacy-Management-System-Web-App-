import React from 'react';
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DrugServiceDr from './DrugServiceDr';

const DoctoSignUp = () => {
    const [name, setname] = useState('');
    const [contact, setcontact] = useState('');
    const [email, setemail] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const { id } = useParams();

    let navigate = useNavigate();

    const regDoctor = (e) => {
        e.preventDefault();

        const doctordata = { name, contact, email, username, password };

        //create
        DrugServiceDr.registerDoctor(doctordata)
            .then(response => {
                console.log("Doctor register successfully", response.data);
                navigate("/doctor");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })

    }


    return (
        <div className='bodyform'>
            <div id="bg"></div>
            <div className='login-form-container'>
            <form>
            <div className='login-form-header'>Register</div>
                <div className="form-field inside">
                    <input
                        type="text"
                        className='editin'
                        id="Admin Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-field inside">
                    <input
                        type="text"
                        className='editin'
                        id=" Admin contact"
                        value={contact}
                        onChange={(e) => setcontact(e.target.value)}
                        placeholder="Enter Contact"
                    />
                </div>

                <div className="form-field inside">
                    <input
                        type="email"
                        className='editin'
                        id="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Enter Email"
                    />

                </div>
                <div className="form-field inside">
                    <input
                        type="text"
                        className='editin'
                        id="username"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        placeholder="Enter Username"
                    />

                </div>
                <div className="form-field inside">
                    <input
                        type="password"
                        className='editin'
                        id="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="Enter Password"
                        autoComplete=''
                    />

                </div>
                <div class="form-field inside" >
                    <button onClick={(e) => regDoctor(e)} className="btn editb">Save</button>
                </div>
            </form>
            </div>

        </div>
    )
}
export default DoctoSignUp;