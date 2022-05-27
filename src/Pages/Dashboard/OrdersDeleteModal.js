import React from 'react';
import { toast } from 'react-toastify';

const OrdersDeleteModal = ({ deleteOrder, setDeleteOrder }) => {

 
  const handleDelete = (id) => {
    
    fetch(`http://localhost:5000/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
         
        {
           toast.success("Data deleted");
           
           setDeleteOrder(null);
           console.log("deleted");
          
 
        }
       
      });
  };
  return (
    <div>
      <input type="checkbox" id="order-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are You sure to delete {deleteOrder.tools}?
          </h3>
        
          <div class="modal-action">
            <button
              onClick={() => handleDelete(deleteOrder._id)}
              class="btn btn-sm  btn-primary text-white"
            >
              Delete
            </button>
            <label for="order-delete-modal" class="btn btn-sm text-white ">
              Cancle
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDeleteModal;