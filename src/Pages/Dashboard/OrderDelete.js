import React from 'react';

const OrderDelete = ({ order,  setDeleteOrder }) => {
  
  
  const { _id ,paid} = order;
  return (
    <div>
      <td>
        {paid ? (
          <label
            onClick={setDeleteOrder(order)}
            disabled
            for="order-delete-modal"
            class="btn modal-button btn-sm btn-primary text-white"
          >
            Delete
          </label>
        ) : (
          <label
            onClick={setDeleteOrder(order)}
            for="order-delete-modal"
            class="btn modal-button btn-sm btn-primary text-white"
          >
            Delete
          </label>
        )}
      </td>
    </div>
  );
};

export default OrderDelete;