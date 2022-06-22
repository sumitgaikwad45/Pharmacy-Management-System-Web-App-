import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import AuthServiceDr from './AuthServiceDr';
import DrugServiceDr from './DrugServiceDr';
import {FiSearch} from "react-icons/fi";



const DrugListDr = () => {

  const [drugs, setdrug] = useState([]);
  const [SearchByname, setSearchByName] = useState('');

  const init = () => {
    DrugServiceDr.getAll()
      .then(response => {
        console.log('Printing Drug data', response.data);
        setdrug(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    
    init();
  }, []);


  const [currentUser, setCurrentUser] = useState(undefined);
  
    useEffect(() => {
      const user = AuthServiceDr.getCurrentUser();
   
      if (user) {
        setCurrentUser(user);
      }
    }, []);

    const logOut = () => {
      AuthServiceDr.logout();
    };


  return (
    
    
    <div>
      <nav class="navbar navbar-expand-lg  navcolor">
  <div class="container">
    <h3 className='navbar-title-design' href="#">PNl</h3>
    <form class="d-flex">
              <input className='search' type="text" placeholder="Search" onChange={e => setSearchByName(e.target.value)}/>
              <FiSearch className='search-icon-edit'/>
            </form>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link  to="/orderlist" className="btn mb-2 linkdesign">View Cart</Link>
        </li>
        {/* <li class="nav-item">
        <Link  to="/doctorslist" className="btn mb-2 linkdesign">Show Drugs</Link>
        </li> */}
        <li class="nav-item">
        <Link  to="/Docpickuplist" className="btn mb-2 linkdesign">Pay and Pickup</Link>
        </li>
        
        <li class="nav-item dropdown">
        <nav>
                {currentUser ? (
                  <div className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a href="/" className="btn  logoutH" onClick={logOut}>
                        Logout <FiLogOut/>
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
    
    
    
    
    
    <div className="container">
    <div className='table-h1-design'>List of Drugs</div>
      
      <div>
        <table className="table table-bordered table-striped">
          <thead className="table-header-design">
            <tr>
              <th className="th-header-padding">Drug Name</th>
              <th className="th-header-padding">Drug Price</th>
              <th className="th-header-padding">Actions</th>
            </tr>
          </thead>
          <tbody>{
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
                <Link className="btn btn-info btn-action-update" to={`/order/${drug.id}`}> Add to cart</Link>
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

export default DrugListDr;
