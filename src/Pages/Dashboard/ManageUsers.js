import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserInfo from './UserInfo';

const ManageUsers = () => {
  const { data: users, isLoding,refetch } = useQuery("users", () =>
    fetch("https://dry-beyond-73074.herokuapp.com/user")
    .then(res => res.json())
  );
  
  if(isLoding){
    return <Loading></Loading>
  }
  return (
    <div>
      <h1 className="text-secondary font-semibold text-left my-7 text-2xl">
        All Users
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>email</th>

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