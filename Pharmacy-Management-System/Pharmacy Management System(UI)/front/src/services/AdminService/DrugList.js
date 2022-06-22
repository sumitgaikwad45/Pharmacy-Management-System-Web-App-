import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AdminAuthService from './AdminAuthService';
import { FiLogOut } from "react-icons/fi";
import Drugservice from './Drugservice';
import './DrugList.css'
import {FiSearch} from "react-icons/fi";





const DrugList = () => {

  //state
  const [drugs, setdrug] = useState([]);
  const [SearchByname, setSearchByName] = useState('');


  const init = () => {
    Drugservice.getAll()
      .then(response => {
        console.log('Printing Drug data', response.data);
        setdrug(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  //shows what need to be done after rendering perticular thing
  useEffect(() => {

    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    Drugservice.remove(id)
      .then(response => {
        console.log('drug deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AdminAuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AdminAuthService.logout();
  };


  return (

    <div>
      <nav class="navbar navbar-expand-lg  navcolor">
        <div class="container">
          <h3 className='navbar-title-design' href="#"><div >PNl</div></h3>
          <form class="d-flex">
              <input className='search' type="text" placeholder="Search" onChange={e => setSearchByName(e.target.value)}/>
              <FiSearch className='search-icon-edit'/>
            </form>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/supplier/list" className="btn mb-2 linkdesign">Show Supplier</Link>
              </li>
              <li class="nav-item">
                <Link to="/add" className="btn mb-2 linkdesign">Add Drug</Link>
              </li>
              <li class="nav-item">
                <Link to="/add/admin" className="btn mb-2 linkdesign">Add new Admin</Link>
              </li>
              <li class="nav-item">
                <Link to="/admin/orderlist" className="btn mb-2 linkdesign">Cart</Link>
              </li>
              <li class="nav-item">
                <Link to="/pickuplist" className="btn mb-2 linkdesign">Pickup</Link>
              </li>
              <li class="nav-item dropdown">
                <nav>
                  {currentUser ? (
                    <div className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <a href="/" className="btn logoutH" onClick={logOut} >
                          Logout <FiLogOut />
                           
                        </a>
                      </li>
                    </div>
                  )
                    : (
                      <div className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <Link to={"/admin/*"} className="nav-link">
                          </Link>
                        </li>
                      </div>
                    )
                  }
                </nav>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>


      {/* <div className='container'>
        <h1>List of Drug</h1>
        <div>

          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Drug Name</th>
                <th>Drug Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                drugs.filter((drug) => {
                  if (SearchByname == "") {
                    return drug
                  }
                  else if (drug.name.toLowerCase().includes(SearchByname.toLowerCase())) {
                    return drug
                  }

                }).map(drug => (
                  <tr key={drug.id}>
                    <td>{drug.name}</td>
                    <td>{drug.price}</td>
                    <td>
                      <Link className="btn btn-info btn-action-update" to={`/drug/edit/${drug.id}`}>Update</Link>

                      <button className="btn  ml-2 btn-action-delete" onClick={() => {
                        handleDelete(drug.id);
                      }}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div>
        </div>
      </div> */}








<div className='container'>
        <div className='table-h1-design'>List of Drugs</div>

        <div>
          <table className="table table-bordered table-striped">
            <thead className="table-header-design">
              <tr>
                <th
                  className="th-header-padding" >Drug Name </th>
                <th className="th-header-padding"  >Drug Price</th>
                <th className="th-header-padding" >Actions</th>
              </tr>
            </thead>
            <tbody >
              {
                drugs.filter((drug) => {
                  if (SearchByname == "") {
                    return drug
                  }
                  else if (drug.name.toLowerCase().includes(SearchByname.toLowerCase())) {
                    return drug
                  }

                }).map(drug => (
                  <tr key={drug.id}>
                    <td className='table-body-align'>{drug.name}</td>
                    <td className='table-body-align'>{drug.price}</td>
                    <td>
                      <Link className="btn btn-info btn-action-update" to={`/drug/edit/${drug.id}`}>Update</Link>

                      <button className="btn  ml-2 btn-action-delete" onClick={() => {
                        handleDelete(drug.id);
                      }}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div>
        </div>
      </div>

    </div>

  );
}

export default DrugList;
