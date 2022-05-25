import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [user]=useAuthState(auth);
  const currentEmail=user.email;
 
 
 const {
   register,
   handleSubmit,
   watch,
   formState: { errors },
 } = useForm();
 const onSubmit = (data) => {
   const email=data.email;
   const name=data.displayName;
   const phone=data.phone;
   const url=data.url;
   const address = data.address;
   const updateUser={email,name,phone,url,address};
   console.log(updateUser);
   fetch(`http://localhost:5000/user/${currentEmail}`, {
     method: "PUT",
     headers: {
       "content-type": "application/json",
       authorization: `Bearer ${localStorage.getItem(`accessToken`)}`,
     },
     body: JSON.stringify(updateUser),
   })
     .then((res) => res.json())
     .then((data) => {
       toast.success("Data updated Succesfully");
        
     });
    

    
  }
  return (
    <div>
      <h1>My Profile{user?.email}</h1>
      <div className="mb-9">
        <div class="avatar placeholder justify-start ">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
            <span class="text-xl text-center">{user?.displayName}</span>
          </div>
        </div>
        <p>{user.email}</p>
      </div>
      <div>
        <form className="w-full mx-auto " onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div class="form-control w-1/2 mx-auto">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name here"
              class="input input-bordered w-full max-w-xs"
              {...register("displayName")}
            />
          </div>
          <div class="form-control w-1/2 mx-auto">
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
          <div class="form-control w-1/2 mx-auto">
            <label class="label">
              <span class="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              placeholder="Phone here"
              class="input input-bordered w-full max-w-xs"
              {...register("phone", {
                required: {
                  value: true,
                  message: "This filed is reqiured",
                },
              })}
            />
            <label class="label">
              {errors.phone?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-1/2 mx-auto">
            <label class="label">
              <span class="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="Address here"
              class="input input-bordered w-full max-w-xs"
              {...register("address", {
                required: {
                  value: true,
                  message: "This filed is reqiured",
                },
              })}
            />
            <label class="label">
              {errors.address?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.address.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-1/2 mx-auto">
            <label class="label">
              <span class="label-text">LinkedIn Profile link</span>
            </label>
            <input
              type="url"
              placeholder="link here"
              class="input input-bordered w-full max-w-xs"
              {...register("url", {
                required: {
                  value: true,
                  message: "Field is reqiured",
                },
              })}
            />
            <label class="label">
              {errors.url?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.url.message}
                </span>
              )}
            </label>
          </div>
        
          <input
            type="submit"
            value="Edit"
            className="btn w-1/2 flex justify-center ml-40 rounded-full  hover:border-2 hover:bg-transparent hover:text-secondary bg-secondary text-white "
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;