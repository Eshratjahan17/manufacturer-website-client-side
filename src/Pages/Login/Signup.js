import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-center text-3xl text-secondary font-bold mt-9 ">
        Sign Up
      </h1>
      <div className="border-x  ">
        <form className="w-1/2 mx-auto " onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div class="form-control w-1/2 mx-auto">
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
                {errors.exampleRequired && <span>This field is required</span>}
              </span>
            </label>
          </div>
          <div class="form-control w-1/2 mx-auto">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email here"
              class="input input-bordered w-full max-w-xs"
              {...register("email")}
            />
            <label class="label">
              <span class="label-text-alt">
                {errors.exampleRequired && <span>This field is required</span>}
              </span>
            </label>
          </div>

          <div class="form-control w-1/2 mx-auto">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password here"
              class="input input-bordered w-full max-w-xs"
              {...register("password", { required: true })}
            />
            <label class="label">
              <span class="label-text-alt">
                {errors.exampleRequired && <span>This field is required</span>}
              </span>
            </label>
          </div>

          {/* errors will return when field validation fails  */}

          <input
            type="submit"
            value="Sign Up"
            className="btn w-1/2 flex justify-center ml-40 text-white bg-red-500  rounded-full  border-0  hover:bg-primary "
          />
        </form>
        <p className="text-center font-semibold my-3">
          Already Have an account?
          <Link to="/signup" className="text-secondary ">
            Log in
          </Link>
        </p>
        <div class="divider w-3/12 mx-auto">OR</div>
        <button className="flex justify-center mx-auto hover:bg-primary bg-red-500 text-white rounded-full p-3">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Signup;