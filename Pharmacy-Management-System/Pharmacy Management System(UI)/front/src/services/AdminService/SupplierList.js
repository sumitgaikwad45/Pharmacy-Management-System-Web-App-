import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AdminAuthService from './AdminAuthService';
import Drugservice from './Drugservice';
import {FiSearch} from "react-icons/fi";



const SupplierList = () => {

  const [suppliers, setsupplier] = useState([]);
  const [SearchByname, setSearchByName] = useState('');

  const init = () => {
    Drugservice.viewSupplier()
      .then(response => {
        console.log('Printing Drug data', response.data);
        setsupplier(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  useEffect(() => {

    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    Drugservice.deleteSupplier(id)
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
          <h3 className='navbar-title-design' href="#">PNl</h3>
          <form class="d-flex">
              <input className='search' type="text" placeholder="Search" onChange={e => setSearchByName(e.target.value)} />
              <FiSearch className='search-icon-edit'/>
            </form>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/list" className="btn mb-2 linkdesign">Show Drugs</Link>
              </li>
              <li class="nav-item">
                <Link to="/add/supplier" className="btn mb-2 linkdesign">Add Supplier</Link>
              </li>
              <li class="nav-item">
                <Link to="/admin/orderlist" className="btn mb-2 linkdesign">Cart</Link>
              </li>
              <li class="nav-item">
                <Link to="/pickuplist" className="btn mb-2 linkdesign">Pickup</Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>


      <div className="container">
      <div className='table-h1-design'>List of Suppliers</div>
        <div>
          <table className="table table-bordered  table table-hover">
            <thead className="table-header-design">
              <tr>
                <th className="th-header-padding"> Name</th>
                <th className="th-header-padding">Email</th>
                <th className="th-header-padding">Contact</th>
                <th className="th-header-padding">Drug Name</th>
                <th className="th-header-padding">Drug Price</th>
                <th className="th-header-padding">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                suppliers.filter((supplier) => {
                  if (SearchByname == "") {
                    return supplier
                  }
                  else if (supplier.name.toLowerCase().includes(SearchByname.toLowerCase())) {
                    return supplier
                  }
                }).map(supplier => (
                  <tr key={supplier.id}>
                    <td className='table-body-align'>{supplier.name}</td>
                    <td className='table-body-align'>{supplier.email}</td>
                    <td className='table-body-align'>{supplier.phoneNumber}</td>
                    <td className='table-body-align'>{supplier.drugName}</td>
                    <td className='table-body-align'>{supplier.drugPrice}</td>
                    <td>

                      <button className="btn  btn-action-delete ml-2" onClick={() => {
                        handleDelete(supplier.id);
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

export default SupplierList;