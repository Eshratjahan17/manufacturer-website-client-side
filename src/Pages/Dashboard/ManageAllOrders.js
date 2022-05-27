import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
  const [allOrders,setAllOrders]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  },[])

  return (
    <div>
      <h1>Manage all orders</h1>
      <div class="overflow-x-auto">
        <table class="lg:table w-full sm:w-1/2 ">
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Tools Name</th>
              
             
              <th>Payment Status</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order._id}</td>
                <td>{order.tools}</td>
                
                
                
                <td>
                  <button class="btn btn-xs btn-secondary text-white">
                    Tiny
                  </button>
                </td>
                <td>
                  <button class="btn btn-xs btn-secondary text-white">
                    Tiny
                  </button>
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