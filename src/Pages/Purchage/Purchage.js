import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import auth from '../../firebase.init';

const Purchage = () => {
   
  const [user, loading, error] = useAuthState(auth);
  const [quantityError,setquantityError]=useState(false);
  const [toolDetails,setToolDetails]=useState([]);
 const [shippingDetails,setshippingDetails]=useState([]);
   let { id } = useParams();
   useEffect(() => {
     fetch(`http://localhost:5000/tools/${id}`)
       .then((res) => res.json())
       .then((data) => setToolDetails(data));
   }, []);
   const {minimum,available,_id,price}=toolDetails;
   const minValue=parseInt(minimum);
  //  const preloaded = {
  //    quantity: "12"
  //  };
  //  console.log(preloaded);
 
   const {
     register,
     handleSubmit,
     watch,
    


     formState: { errors },
   } = useForm({});
  
   const onSubmit = (data) => {
     console.log(data,errors);

     setshippingDetails(data);
     const order = {
       toolsId: _id,
       name: data.name,
       address: data.address,
       email: user?.email,
       phone: data.phone,
       quantity: data.quantity,
       tools: data.tools,
       price:data.price
     };
      console.log(order);
     fetch("http://localhost:5000/order", {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(order),
     })
       .then((res) => res.json())
       .then((data) => 
       {
         console.log(data);
        
      });
      
     
   }; 
 
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
              Price: {toolDetails.price}
            </p>
            <p class="">Available: {toolDetails.available}</p>
            <p class="">Minimum-Order: {toolDetails.minimum}</p>
          </div>
          <div class="card grow  w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto ">
                <div class="form-control mx-auto">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Your Name here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("name")}
                  />
                </div>
                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text">Phone</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Your phone here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("phone")}
                  />
                </div>
                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text">email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("email")}
                  />
                </div>
                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Address here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("address")}
                  />
                </div>
                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Product here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("productName")}
                  />
                </div>
                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price here"
                    defaultValue={toolDetails.price}
                    class="input input-bordered w-full max-w-xs"
                    {...register("price")}
                  />
                </div>
                {/* quantity */}
                <div class="form-control  mx-auto">
                  <label class="label">
                    <span class="label-text">Quantity</span>
                  </label>
                  <input
                    type="number"
                    class="input input-bordered w-full max-w-xs"
                    defaultValue={toolDetails.minimum}
                    {...register("quantity", {
                      max: available,
                      min: minimum,
                       })}
                  />
                  <label class="label">
                   {
                     
                   }
                  </label>
                </div>

                <input
                  type="submit"
                  value="Go to Checkout"
                  className="btn w-1/2 flex justify-center ml-40 mt-7 rounded-full  hover:border-2 hover:bg-transparent hover:text-secondary bg-secondary text-white  "
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