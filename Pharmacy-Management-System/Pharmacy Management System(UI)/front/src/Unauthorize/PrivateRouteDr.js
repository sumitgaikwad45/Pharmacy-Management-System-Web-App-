import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthServiceDr from '../services/Doctor/AuthServiceDr';



const PrivateRouteDr=({ children }) =>{
   const user =AuthServiceDr.getCurrentUser();
    return user?children:<Navigate to="/unauthorize"/>;
   };

export default PrivateRouteDr;