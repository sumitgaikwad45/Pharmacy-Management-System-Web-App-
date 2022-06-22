
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Drugservice from '../../../services/AdminService/Drugservice';





const AdminOrderList = () => {

  const [orders, setorders] = useState([]);

  const init = () => {
    Drugservice.viewOrders()
      .then(response => {
        console.log('Printing Drug data', response.data);
        setorders(response.data);
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
    Drugservice.deleteorder(id)
      .then(response => {
        console.log('order deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }


  return (
    <div>
      <nav class="navbar navbar-expand-lg  navcolor">
        <div class="container">
          <h3 className='navbar-title-design' href="#">PNl</h3>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <div className='search'></div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/list" className="btn mb-2 linkdesign">Show Drugs</Link>
              </li>
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
                <Link to="/pickuplist" className="btn mb-2 linkdesign">Pickup</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div className="container ">
        <div className='table-h1-design'>List of Order</div>

          <div>
            <table className="table table-bordered table-striped">
              <thead className="table-header-design">
                <tr>
                  <th className="th-header-padding">Doctor Name</th>
                  <th className="th-header-padding">Drug Name</th>
                  <th className="th-header-padding">Drug Price</th>
                  <th className="th-header-padding">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders.map(order => (
                    <tr key={order.id}>
                      <td className='table-body-align'>{order.doctor}</td>
                      <td className='table-body-align'>{order.name}</td>
                      <td className='table-body-align'>{order.price}</td>
                      <td>
                        <Link className="btn btn-info btn-action-update" to={`/Pickup/${order.id}`}>Verify</Link>
                        <button className="btn btn-action-delete  ml-2" onClick={() => { handleDelete(order.id); }}>Delete</button>
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
    </div>
  );
}

export default AdminOrderList;
