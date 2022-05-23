import React from 'react';
import BusinessSummury from './BusinessSummury';
import Products from './Products';
import Reviwes from './Reviwes';

const Body = () => {
  
  // console.log(tools);

  return (
    <div>
     
        <Products ></Products>
      

      <Reviwes></Reviwes>
      <BusinessSummury></BusinessSummury>
    </div>
  );
};

export default Body;