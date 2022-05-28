import React, { useState } from 'react';
import useData from "../../Hooks/useData";
import DeleteModal from './DeleteModal';

const ManageProducts = () => {
  const  [tools, isLoading, setIsLoading]=useData();
  const[deleteModal,setDeleteModal]=useState(null);

  
  return (
    <div>
      <h1 className="text-secondary font-semibold text-left my-7 text-2xl">
        Manage Products
      </h1>
      <div class="overflow-x-auto">
        <table class="table lg:w-1/2 sm:w-full">
          <thead>
            <tr>
              <th></th>
              
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <tr>
                <th>{index + 1}</th>
                
                <td>{tool.name}</td>
                <td>
                  <label
                    onClick={() => setDeleteModal(tool)}
                    for="delete-modal"
                    class="btn modal-button btn-sm btn-primary text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          deleteModal={deleteModal}
          isLoading={isLoading}
          hand
        ></DeleteModal>
      )}
    </div>
  );
};

export default ManageProducts;