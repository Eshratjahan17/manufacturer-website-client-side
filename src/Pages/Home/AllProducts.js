import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';
const AllProducts = () => {
  const [Alldata,setAllData]=useState([]);
  const [isLoading, setisLoading] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/addProduct")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  },[])
  
  
  return (
    <div className="my-9">
      <h1 className="text-center text-3xl text-secondary font-bold mt-9">
        Our Products
      </h1>
      <div class="divider w-1/4 mx-auto "></div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3 place-content-center pr-2 pl-5  ">
        {Alldata.map((tool) => (
          <AllProduct tool={tool}></AllProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;