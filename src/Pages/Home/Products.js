import React from 'react';
import useData from '../../Hooks/useData';
import Loading from '../Shared/Loading/Loading';
import Tool from './Tool';

const Products = () => {
  const [tools, isLoading] = useData();
 console.log(tools);
 if(isLoading){
   return <Loading></Loading>
 }
  
  
  return (
    <div className="my-9">
      <h1 className="text-center text-3xl text-secondary font-bold mt-9">
        Our Products
      </h1>
      <div class="divider w-1/4 mx-auto "></div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3 place-content-center pr-2 pl-5  ">
        {tools.map((tool) => (
          <Tool tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Products;