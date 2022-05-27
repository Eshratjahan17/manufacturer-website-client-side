import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const DeleteModal = ({ deleteModal, isLoading, setDeleteModal }) => {
  const { name } = deleteModal;
  console.log(name);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/tools/${id}`, {
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
    <div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are You sure to delete {name}</h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
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