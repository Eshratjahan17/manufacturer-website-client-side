import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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
   const {minimum}=toolDetails;
   console.log(minimum);
   const {
     register,
     handleSubmit,
     watch,
     formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
     console.log(data.email,data.name,data.number);
   }; 
  
   
  
   
  
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content grid grid-cols-2 ">
          <div class="text-center lg:text-left basis-1/4">
            <h1 class="text-5xl font-bold">{toolDetails.name}</h1>
            <p class="py-6">
              <p class="py-6">{toolDetails.about}</p>
              Price: {toolDetails.Price}
            </p>
            <p class="py-6">Available: {toolDetails.available}</p>
            <p class="py-6">Minimum-Order: {toolDetails.minimum}</p>
          </div>
          <div class="card grow  w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto ">
                {/* register your input into the hook by invoking the "register" function */}
                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Your Name here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("name")}
                  />
                  <label class="label">
                    <span class="label-text-alt">
                      {errors.exampleRequired && (
                        <span>This field is required</span>
                      )}
                    </span>
                  </label>
                </div>
                <div class="form-control mx-auto">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is reqiured",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  <label class="label">
                    {errors.email?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span class="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text">Order Quantity</span>
                  </label>
                  <input
                    type="number"
                    placeholder="order Quantity here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("number", {
                      required: {
                        value: true,
                        message: "This field  is reqiured",
                      },
                      minLength: {
                        value: {minimum},
                        message: "Password must be more than 6 charecters",
                      },
                    })}
                  />
                  <label class="label">
                    {errors.number?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.number.message}
                      </span>
                    )}
                    {errors.number?.type === "min" && (
                      <span class="label-text-alt text-red-500">
                        {errors.number.message}
                      </span>
                    )}
                  </label>
                </div>

                <input
                  type="submit"
                  value="Go to Checkout"
                  className="btn w-1/2 flex justify-center ml-40 rounded-full  hover:border-2 hover:bg-transparent hover:text-secondary bg-secondary text-white  "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchage;