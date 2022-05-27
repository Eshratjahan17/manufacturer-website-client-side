import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserInfo from './UserInfo';

const ManageUsers = () => {
  const { data: users, isLoding,refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/user")
    .then(res => res.json())
  );
  console.log(users);
  if(isLoding){
    return <Loading></Loading>
  }
  return (
    <div>
      <h1>This is users for admin{users?.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserInfo refetch={refetch} index={index} user={user}></UserInfo>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;