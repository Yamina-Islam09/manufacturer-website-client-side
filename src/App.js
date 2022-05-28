import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Footer from './Pages/Shared/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';
import Users from './Pages/Dashboard/Users';
import MyBooking from './Pages/Dashboard/MyBooking';
import AddItem from './Pages/Dashboard/AddItem';
import ManageItem from './Pages/Dashboard/ManageItem';
import AddReview from './Pages/Dashboard/AddReview';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound'
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import Payment from './Pages/Dashboard/Payment';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="item/:itemId" element={
          <RequireAuth>
           <Purchase></Purchase>
          </RequireAuth>
        }></Route>

       
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
        <Route index element={<MyBooking></MyBooking>}></Route>
        <Route path="review" element={<AddReview></AddReview>}></Route>
        <Route path="payment/:id" element={<Payment></Payment>}></Route>
        <Route path="addItem" element={<RequireAdmin><AddItem></AddItem></RequireAdmin>}></Route>
        <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        <Route path="manageItem" element={<RequireAdmin><ManageItem></ManageItem></RequireAdmin>}></Route>
        <Route path="manageOrder" element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
         
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
