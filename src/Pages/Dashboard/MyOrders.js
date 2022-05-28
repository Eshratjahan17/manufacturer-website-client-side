import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderDelete from './OrderDelete';
import OrdersDeleteModal from './OrdersDeleteModal';
     

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  const [deleteOrder,setDeleteOrder]=useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://dry-beyond-73074.herokuapp.com/order?email=${user.email}`, {
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
        .then((data) => {
          setMyOrders(data);
        });
    }
  }, [user, deleteOrder, myOrders]);
  

  
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
                  {order.paid ? (
                    <Link to={`/payment/${order._id}`}>
                      <button disabled class="btn btn-secondary text-white">
                        Payment
                      </button>
                    </Link>
                  ) : (
                    <Link to={`/payment/${order._id}`}>
                      <button class="btn btn-secondary text-white">
                        Payment
                      </button>
                    </Link>
                  )}
                </td>

                <OrderDelete
                  order={order}
                  setDeleteOrder={setDeleteOrder}
                  deleteOrder={deleteOrder}
                ></OrderDelete>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && (
        <OrdersDeleteModal
          
          setDeleteOrder={setDeleteOrder}
          deleteOrder={deleteOrder}
        ></OrdersDeleteModal>
      )}
    </div>
  );
};

export default MyOrders;