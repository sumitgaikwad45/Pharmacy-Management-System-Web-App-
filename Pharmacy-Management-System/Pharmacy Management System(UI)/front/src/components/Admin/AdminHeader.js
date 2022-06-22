import React from 'react';
import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <div className='header'>
     <div className='header_Left'>
         <img src='' slot=''/>
         <h2>E-Pharma</h2>
         </div>   
        <div className='header_right'>
            <ul className='header_rightList'>
                <li><Link to='#'>Welcome</Link></li>
                <li><Link to='/list'>Manage Drugs</Link></li>
                <li><Link to='/supplier/list'>Manage Suppliers</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default AdminHeader