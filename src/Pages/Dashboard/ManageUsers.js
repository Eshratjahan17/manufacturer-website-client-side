import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const ManageUsers = () => {
  const { data: users, isLoding } = useQuery("users", () =>
    fetch("http://localhost:5000/user")
    .then(res => res.json())
  );
  if(isLoding){
    return <Loading></Loading>
  }
  return (
    <div>
      <h1>This is users for admin{users.length}</h1>
    </div>
  );
};

export default ManageUsers;