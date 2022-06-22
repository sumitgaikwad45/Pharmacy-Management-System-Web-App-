
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthServiceDr from '../../services/Doctor/AuthServiceDr';
import '../Doctor/Doctor.css';
import {BiUser} from "react-icons/bi";
import {BiLockAlt} from "react-icons/bi";


function Doctor() {

    const [data, setData] = useState({
        username: "",
        password: ""
    })


    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await AuthServiceDr.login(data.username, data.password).then(
                () => {
                    navigate("/doctorslist");
                    window.location.reload();
                },
                (error) => {
                    console.log(error);
                }
            )
        }
        catch (err) {
            console.log(err);
        }
    }



    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <React.Fragment>


            <div className='bodyform'>
                <div id="bg"></div>
                <div className='login-form-container'>
                    <form onSubmit={handleLogin}>
                        <div className='login-form-header'>Log in</div>
                        <div className="form-field inside">
                        <BiUser className='login-doctor-user'/>
                            <input onChange={(e) => handle(e)} id="username" value={data.username} className='editin' type="username" placeholder="Username" required />

                        </div>

                        <div className="form-field inside">
                        <BiLockAlt className='login-doctor-user'/>
                            <input onChange={(e) => handle(e)} id="password" value={data.password} className='editin' type="password" placeholder="Password" required />

                        </div>

                        <div class="form-field inside">
                            <button className="btn editb" type="submit">Log in</button>

                        </div>
                        <Link className='dlink' to={"/registerdr"}>Not a user? Register now</Link>
                    </form>
                </div>

            </div>



        </React.Fragment>
    )
}

export default Doctor;