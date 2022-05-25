import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviwes = () => {
  const [reviews,setReviews]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/addreview")
    .then(res=>res.json())
    .then(data=>{
      setReviews(data);
      console.log(data)})
  },[])
  return (
    <div>
      <h1 className="text-center text-3xl text-secondary font-bold mt-9 ">
       Customer Reviwes
      </h1>
      <div
        id="#reviwes"
        className="  px-5 my-8  grid sm:grid-cols-1 lg:grid-cols-3 gap-4  "
      >
        {reviews.map((review) => (
          <Review review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviwes;