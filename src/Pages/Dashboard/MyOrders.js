import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderDelete from './OrderDelete';

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("response", res);
          if (res.status === 401 || res.status === 403) {
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setMyOrders(data));
    }
  }, [user]);
  console.log(myOrders);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are You sure?");
    if(proceed){
       fetch(`http://localhost:5000/order/${id}`, {
         method: "DELETE",
       })
         .then((res) => {
           res.json();
         })
         .then((data) => {console.log("deleted"); }
           
         );

    }
   
  };
  return (
    <div>
      <h1>My orders:{myOrders.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Tools Name</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.tools}</td>
                <td>{order.quantity}</td>
                <td>
                  <Link to={`/payment/${order._id}`}>
                    <button class="btn btn-secondary text-white">
                      Payment
                    </button>
                  </Link>
                </td>

                <OrderDelete
                  order={order}
                  handleDelete={handleDelete}
                ></OrderDelete>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;