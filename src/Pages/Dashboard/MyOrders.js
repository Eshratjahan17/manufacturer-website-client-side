import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
  const[user]=useAuthState(auth);
  const [myOrders,setMyOrders]=useState([]);

  useEffect(()=>{
    if(user){
       fetch(`http://localhost:5000/order?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>setMyOrders(data));
    }
   
  },[user])
  console.log(myOrders);
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
            {myOrders.map((order,index) => (
              <tr>
                <th>{index+1}</th>
                <td>{order.name}</td>
                <td>{order.tools}</td>
                <td>{order.quantity}</td>
                <td>
                  <button class="btn btn-secondary text-white">Payment</button>
                </td>
                <td>
                  <button class="btn btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;