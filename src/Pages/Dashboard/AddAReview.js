import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddAReview = () => {
   const {
     register,
     handleSubmit,
     reset,
     formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
     const name=data.name;
     const email=data.email;
     const about = data.review;
     const ratings = data.ratings;
     const picture = data.image;
     const userReview = { name, email, about, ratings, picture };
     
     fetch("https://dry-beyond-73074.herokuapp.com/addreview", {
       method: "POST",
       body: JSON.stringify(userReview),
       headers: {
         "content-type": "application/json",
         
       },
     })
       .then((res) => res.json())
       .then((data) => {
         toast('Review added');
         console.log(data)
        reset({
          displayName: " ",
          email: " ",
          review: " ",
          ratings: " ",
          image: " ",
         
        });});
   }
  return (
    <div className="bg-base-200">
      <h1 className="text-center text-3xl text-secondary font-bold mt-9  ">
        Add A Review !!
      </h1>
      <form
        className="w-full mx-auto  ml-28 mt-10 drop-shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
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
            {errors.review?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.review.message}
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
            placeholder="Rate our Service Out of 5"
            class="input input-bordered w-full max-w-xs"
            {...register("ratings", {
              required: {
                value: true,
                message: "This filed is reqiured",
              },
            })}
          />
          <label class="label">
            {errors.ratings?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.ratings.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control w-1/2 mx-auto">
          <label class="label">
            <span class="label-text">Your Avatar link</span>
          </label>
          <input
            type="url"
            placeholder="image link here"
            class="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Field is reqiured",
              },
            })}
          />
          <label class="label">
            {errors.image?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <input
          type="submit"
          value="Post review"
          className="btn w-1/3 flex justify-center ml-64 mb-32 rounded-full  hover:border-2 hover:bg-transparent hover:text-secondary bg-secondary text-white "
        />
      </form>
    </div>
  );
};

export default AddAReview;