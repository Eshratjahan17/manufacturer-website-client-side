import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const DeleteModal = ({ deleteModal, isLoading, setDeleteModal }) => {
  const { name } = deleteModal;
  
  const handleDelete = (id) => {
    fetch(`https://dry-beyond-73074.herokuapp.com/tools/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (isLoading) {
          return <Loading></Loading>;
        } else if (data.deletedCount) {
          toast.success("Delete Successful");
          console.log(data);
          setDeleteModal(null);
        }
      });
  };
  return (
    <div className="">
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle bg-white bg-transparent">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are You sure to delete {name} ?</h3>
          <div class="modal-action ">
            <button
              onClick={() => handleDelete(deleteModal._id)}
              class="btn btn-sm btn-primary text-white"
            >
              Delete
            </button>
            <label for="delete-modal" class="btn btn-sm">
              Cancle
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;