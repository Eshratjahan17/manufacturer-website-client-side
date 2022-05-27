import React from 'react';
import { toast } from 'react-toastify';

const UserInfo = ({ user, index, refetch }) => {
  const { _id, email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if(res.status === 403){
          toast.error('You can not make admin');
        }
        return res.json()})
      .then((data) => {
        if(data.modifiedCount>0){
           refetch();
           toast.success("Make Admin successful");
        }
       
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{_id}</td>
      
      <td>
        {role !== "admin" ? (
          <button
            onClick={makeAdmin}
            class="btn btn-xs btn-secondary text-white"
          >
            Make Admin
          </button>
        ) : (
          <button
            onClick={makeAdmin}
            disabled
            class="btn btn-xs btn-secondary text-white"
          >
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserInfo;