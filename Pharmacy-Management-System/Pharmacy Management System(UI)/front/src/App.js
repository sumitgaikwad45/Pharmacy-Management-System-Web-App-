import { BrowserRouter, Routes, Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import AddDrug from './components/AddDrug';
import './App.css';
import App1 from './App1';

import Admin from './components/Admin/Admin';
import DrugListDr from './services/Doctor/DrugListDr';
import Doctor from './components/Doctor/Doctor';
import DoctorSignUp from './services/Doctor/DoctorSignUp';
import DrugList from './services/AdminService/DrugList';
import SupplierList from './services/AdminService/SupplierList';
import AddSupplier from './components/AddSupplier';
import AdminSignUp from './services/AdminService/AdminSignup';
import CreateOrder from './components/Order/CreateOrder';
import OrderList from './components/Order/OrderList';

import AddtoPickup from './services/Pickup/AddtoPickup';
import PickUpList from './services/Pickup/PickUpList';
import DocPickUpList from './services/Pickup/DocPickUpList';
import AdminOrderList from './components/Admin/Admin Order/Adminorder';
import Paytm from './components/Payment/Paytm';
import Checkout from './stripe/Checkout';
import NotFound from './components/NotFound';
import Unauthorize from './components/Unauthorize';
import PrivateRoute from './Unauthorize/PrivateRoute';
import PrivateRouteDr from './Unauthorize/PrivateRouteDr';
import Chatbot from './components/chatbot/Chatbot';




function App() {
  return (

    <div>
      <BrowserRouter>

        <div>
          <Routes>
            <Route exact path="/" element={<App1 />} />
            <Route path="/admin" element={<Admin />} />
            <Route exact path="/add/admin" element={<PrivateRoute><AdminSignUp /></PrivateRoute>} />
            <Route exact path="/list" element={<PrivateRoute><DrugList /></PrivateRoute>} />
            <Route path="/add" element={<PrivateRoute><AddDrug /></PrivateRoute>} />
            <Route path="/drug/edit/:id" element={<PrivateRoute><AddDrug /></PrivateRoute>} />

            <Route path="/doctor" element={<Doctor />} />
            <Route exact path="/registerdr" element={<DoctorSignUp />} />
            <Route exact path="/doctorslist" element={<PrivateRouteDr><DrugListDr /></PrivateRouteDr>} />

            <Route path="/supplier/list" element={<PrivateRoute><SupplierList /></PrivateRoute>} />
            <Route path='/add/supplier' element={<PrivateRoute><AddSupplier /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
            <Route path='/unauthorize' element={<Unauthorize />} />

            <Route path='/order/:id' element={<CreateOrder />} />
            <Route path="/orderlist" element={<PrivateRouteDr><OrderList /></PrivateRouteDr>} />
            <Route path="/admin/orderlist" element={<PrivateRoute><AdminOrderList /></PrivateRoute>} />
            <Route path='/Pickup/:id' element={<AddtoPickup />} />
            <Route path='/pickuplist' element={<PrivateRoute><PickUpList /></PrivateRoute>} />
            <Route path='/Docpickuplist' element={<PrivateRouteDr><DocPickUpList /></PrivateRouteDr>} />
            <Route path="/pay" element={<Paytm />} />
            <Route path="/pay/stripe" element={<Checkout />} />
            <Route path="/chat" element={<Chatbot/>}/>

          </Routes>
        </div>
      </BrowserRouter>

    </div>

  );
}


export default App;
