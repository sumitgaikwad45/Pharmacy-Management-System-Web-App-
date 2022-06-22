
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminAuthService from '../../services/AdminService/AdminAuthService';
import '../Admin/admin.css';
import {BiUser} from "react-icons/bi";
import {BiLockAlt} from "react-icons/bi";

function Admin() {

  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AdminAuthService.login(data.username, data.password).then(
        () => {
          navigate("/list");
          window.location.reload();

        },
        (error) => {

          console.log(error);
          setError("Incorrect credentials");

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
      <div >
        <div className='editbody'>
          <div id="sg"></div>
          <div className="admin-login-form-container">
            <form onSubmit={handleLogin}>
              <div className='admin-login-form-header'>Log in</div>
              <div className="form-field natv">
              <BiUser className='login-admin-user'/>
                <input onChange={(e) => handle(e)} id="username" value={data.username} className='iedit' type="username" placeholder="Username" required />
              </div>

              <div className="form-field natv">
              <BiLockAlt className='login-admin-user'/>
                <input onChange={(e) => handle(e)} id="password" value={data.password} className='iedit' type="password" placeholder="Password" required />
              </div>

              <div className="form-field natv">
                <button className="btn wbit" type="submit">Log in</button>
              </div>
            </form>

          </div>
        </div>










      </div>

    </React.Fragment>
  )
}

export default Admin;