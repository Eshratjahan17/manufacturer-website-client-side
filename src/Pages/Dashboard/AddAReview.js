import React from 'react';
import { useForm } from 'react-hook-form';

const AddAReview = () => {
   const {
     register,
     handleSubmit,
     watch,
     formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
     const name=data.name;
     const email=data.email;
     const review = data.review;
     const ratings = data.ratings;
     const userReview={name,email,review,ratings};
     console.log(userReview);
     fetch("http://localhost:5000/addreview", {
       method: "POST",
       body: JSON.stringify(userReview),
       headers: {
         "content-type": "application/json",
         authorization: `Bearer ${localStorage.getItem(`accessToken`)}`,
       },
     })
       .then((res) => res.json())
       .then((data) => console.log(data));
   }
  return (
    <div>
      <h1>Add Reviwe here</h1>
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
            <span class="label-text">Review Here</span>
          </label>
          <input
            type="text"
            placeholder="Reviwe here"
            class="input input-bordered input-lg w-full max-w-xs"
            {...register("review", {
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
            <span class="label-text">Ratings</span>
          </label>
          <input
            type="number"
            placeholder="Ratings here"
            class="input input-bordered w-full max-w-xs"
            {...register("ratings", {
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
       

        <input
          type="submit"
          value="Post reviwe"
          className="btn w-1/2 flex justify-center ml-40 rounded-full  hover:border-2 hover:bg-transparent hover:text-secondary bg-secondary text-white "
        />
      </form>
    </div>
  );
};

export default AddAReview;