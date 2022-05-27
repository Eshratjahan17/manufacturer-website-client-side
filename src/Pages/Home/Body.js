import React from 'react';
import About from './About';
import BusinessSummury from './BusinessSummury';
import Products from './Products';
import Reviwes from './Reviwes';
import WorkFlow from './WorkFlow';


const Body = () => {
  
  // console.log(tools);

  return (
    <div>
     
     <About></About>
     <Products ></Products>
      <Reviwes></Reviwes>
     <WorkFlow></WorkFlow>
      <BusinessSummury></BusinessSummury>
    </div>
  );
};

export default Body;