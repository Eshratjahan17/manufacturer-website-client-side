import React from 'react';
import useData from '../../Hooks/useData';
import Tool from './Tool';

const Products = () => {
  const [tools] = useData();
  const homeTools = tools.slice(0, 6).reverse();
  
  
  return (
    <div className="my-9">
      <h1 className="text-center text-3xl text-secondary font-bold mt-9">
        Our Products
      </h1>
      <div class="divider w-1/4 mx-auto "></div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3 place-content-center pr-2 pl-5  ">
        {homeTools.map((tool) => (
          <Tool tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Products;