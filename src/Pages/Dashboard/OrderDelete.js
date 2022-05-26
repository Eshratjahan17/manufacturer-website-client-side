import React, { useState } from 'react';
import Loading from '../Shared/Loading/Loading';

const OrderDelete = ({ order, handleDelete }) => {
  const [isLoading,setIsLoading]=useState(false);
  if(isLoading){
    return<Loading></Loading>
  }
  const { _id } = order;
  return (
    <div>
      <td>
        <button onClick={()=>handleDelete(_id)} class="btn btn-sm">
          Delete
        </button>
      </td>
    </div>
  );
};

export default OrderDelete;