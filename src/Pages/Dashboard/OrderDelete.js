import React from 'react';

const OrderDelete = ({ order,  setDeleteOrder }) => {
  
  
  const { _id } = order;
  return (
    <div>
      <td>
        
        <label
          onClick={setDeleteOrder(order)}
          for="order-delete-modal"
          class="btn modal-button btn-sm btn-primary text-white"
        >
          Delete
        </label>
      </td>
    </div>
  );
};

export default OrderDelete;