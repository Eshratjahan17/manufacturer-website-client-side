import React from 'react';
import About from './About';
import BusinessSummury from './BusinessSummury';
import Products from './Products';
import Reviwes from './Reviwes';

const Body = () => {
  
  // console.log(tools);

  return (
    <div>
     
     <About></About>
     <Products ></Products>
      <Reviwes></Reviwes>
      <BusinessSummury></BusinessSummury>
    </div>
  );
};

export default Body;