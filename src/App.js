import { Route, Routes } from 'react-router';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import AddAProduct from "./Pages/Dashboard/AddAProduct";
import AddAReview from "./Pages/Dashboard/AddAReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageUsers from './Pages/Dashboard/ManageUsers';
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from './Pages/Dashboard/Payment';
import AllProducts from './Pages/Home/AllProducts';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';
import Purchage from './Pages/Purchage/Purchage';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/allProducts" element={<AllProducts></AllProducts>}></Route>
       
        <Route
          path="/myportfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route
          path="/tools/:id"
          element={
            <RequireAuth>
              <Purchage></Purchage>
            </RequireAuth>
          }
        ></Route>
        <Route path="/payment/:id" element={<Payment></Payment>}></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addReview" element={<AddAReview></AddAReview>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="manageUsers"
            element={<ManageUsers></ManageUsers>}
          ></Route>
          <Route
            path="addProduct"
            element={<AddAProduct></AddAProduct>}
          ></Route>
         
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
