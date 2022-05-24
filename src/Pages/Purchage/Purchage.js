import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import auth from '../../firebase.init';

const Purchage = () => {
  const [user, loading, error] = useAuthState(auth);
   let {id}=useParams();
   console.log(id);
   
   const [toolDetails,setToolDetails]=useState([]);
   const [shippingDetails,setshippingDetails]=useState([]);
   useEffect(() => {
     fetch(`http://localhost:5000/tools/${id}`)
       .then((res) => res.json())
       .then((data) => setToolDetails(data));
   }, []);
   const {minimum,available}=toolDetails;
  let minValue= parseInt(minimum);
  console.log(typeof(minValue));
   const {
     register,
     handleSubmit,
     watch,
     formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
     setshippingDetails(data);
     console.log(data.email,data.name,data.number);
   }; 
  console.log(shippingDetails);
  const productQuantity=shippingDetails.number;

   
  
   
  
  return (
    <div className=" bg-slate-400">
      <div class="hero  min-h-screen bg-base-200">
        <div class="hero-content grid grid-cols-2 ">
          <div class="text-center lg:text-left basis-1/4">
            {/* user Info */}
            <div className="mb-9">
              <div class="avatar placeholder justify-start ">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                  <span class="text-xl text-center">{user.displayName}</span>
                </div>
              </div>
              <p>{user.email}</p>
            </div>
            {/* user Info */}

            <h1 class="text-5xl font-bold ">{toolDetails.name}</h1>
            <p class="py-6">
              <p class="">{toolDetails.about}</p>
              Price: {toolDetails.Price}
            </p>
            <p class="">Available: {toolDetails.available}</p>
            <p class="">Minimum-Order: {toolDetails.minimum}</p>
          </div>
          <div class="card grow  w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto ">
                {/* Name */}
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
                {/* Phone */}
                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Your Phone here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("phone")}
                  />

                  <label class="label">
                    <span class="label-text-alt">
                      {errors.exampleRequired && (
                        <span>This field is required</span>
                      )}
                    </span>
                  </label>
                </div>
                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text">Address </span>
                  </label>
                  <textarea
                    type="address"
                    placeholder="Your Name here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("address")}
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
                  {
                    <input
                      type="number"
                      placeholder="order Quantity here"
                      class="input input-bordered w-full max-w-xs"
                      {...register("number", {
                        required: {
                          value: true,
                          message: "This field  is reqiured",
                        },
                        // min: {
                        //   value:minValue, //{minimum}
                        //   message: "minimum value is 10",
                        // },
                      })}
                    />
                  }
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