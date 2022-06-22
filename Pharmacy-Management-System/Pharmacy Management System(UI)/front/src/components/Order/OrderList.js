import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DrugServiceDr from '../../services/Doctor/DrugServiceDr';



const OrderList = () => {

  const [orders, setorders] = useState([]);
  const [SearchByname, setSearchByName] = useState('');

  const init = () => {
    DrugServiceDr.orderlist()
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



  return (

    <div>
      <nav class="navbar navbar-expand-lg  navcolor">
        <div class="container">
          <h3 className='navbar-title-design' href="#">PNl</h3>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className='search'></div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/doctorslist" className="btn mb-2 linkdesign">Show Drugs</Link>
              </li>
              {/* <li class="nav-item">
                <Link to="/orderlist" className="btn mb-2 linkdesign">Cart</Link>
              </li> */}
              <li class="nav-item">
                <Link to="/Docpickuplist" className="btn mb-2 linkdesign">Pay and Pickup</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div>
          <div className="container ">
          <div className='table-h1-design'>Order List</div>


            <div>

              <table className="table table-bordered table-striped">
                <thead className="table-header-design">
                  <tr>
                    <th className="th-header-padding">Doctor Name</th>
                    <th className="th-header-padding">Drug Name</th>
                    <th className="th-header-padding">Drug Price</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    orders.map(order => (
                      <tr key={order.id}>
                        <td className='table-body-align'>{order.doctor}</td>
                        <td className='table-body-align'>{order.name}</td>
                        <td className='table-body-align'>{order.price}</td>

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
    </div>
  );
}

export default OrderList;
