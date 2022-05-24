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
  return (
    <div>
      <h1>My orders:{myOrders.length}</h1>
    </div>
  );
};

export default MyOrders;