import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';

const ManageAllOrders = () => {
  const [allOrders,setAllOrders]=useState([]);
  const [orderStatus, setOrderStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
         if (isLoading) {
           return <Loading></Loading>;
         }
         else{
            setAllOrders(data);

         }
       
      });
  }, [allOrders, orderStatus]);
 
  const handleShipping=(id)=>{
    fetch(`http://localhost:5000/orders/paid/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount>0) {
          setOrderStatus(data);
          console.log(data);
        }
      });
  }
console.log(orderStatus);
  return (
    <div>
      <h1>Manage all orders</h1>
      <div class="overflow-x-auto">
        <table class="lg:table w-full sm:w-1/2 ">
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Payment Status</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order._id}</td>

                <td>
                  {order?.paid ? (
                    <button class="btn btn-xs btn-secondary text-white">
                      Paid
                    </button>
                  ) : (
                    <button class="btn btn-xs btn-secondary text-white">
                      Unpaid
                    </button>
                  )}
                </td>
                <td>
                  {
                    order.status ==="shipped" ?
                    /* {order.paid && (status === "paid") ? ( */
                  
                  <button
                    onClick={() => handleShipping(order._id)}
                    class="btn btn-xs btn-secondary text-white"
                  >
                    Shipped
                  </button>
                   : 
                  <button
                    onClick={() => handleShipping(order._id)}
                    class="btn btn-xs btn-secondary text-white"
                  >
                    Pending
                  </button>
                }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;