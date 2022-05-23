import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Purchage = () => {
   let {id}=useParams();
   console.log(id);
   
   const [toolDetails,setToolDetails]=useState([]);
   useEffect(() => {
     fetch(`http://localhost:5000/tools/${id}`)
       .then((res) => res.json())
       .then((data) => setToolDetails(data));
   }, []);
  
   
  
   
  
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">{toolDetails.name}</h1>
            <p class="py-6">
              <p class="py-6">{toolDetails.about}</p>
              Price: {toolDetails.Price}
            </p>
            <p class="py-6">Available: {toolDetails.available}</p>
            <p class="py-6">Minimum-Order: {toolDetails.minimum}</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name here"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <textarea
                  class="textarea textarea-bordered"
                  placeholder="Your Address"
                ></textarea>
                <input type="radio" name="click" value="value" />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchage;