import React from 'react';
import useData from "../../Hooks/useData";
import Loading from '../Shared/Loading/Loading';

const ManageProducts = () => {
  const  [tools, isLoading, setIsLoading]=useData();
  const handleDelete=(id)=>{
    fetch(`http://localhost:5000/tools/${id}`,{
      method:"DELETE",
    })
    .then(res=>res.json())
    .then(data=>{
      if(isLoading){
        return<Loading></Loading>
        console.log(data);
      }
    })

  }
  
  return (
    <div>
      <h1>manage Products</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Id:</th>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool,index) => (
              <tr>
                <th>{index +1}</th>
                <td>{tool._id}</td>
                <td>{tool.name}</td>
                <td>
                  <button onClick={()=>handleDelete(tool._id)} class="btn btn-sm btn-primary text-white">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;