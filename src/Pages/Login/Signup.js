import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";
  
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(googleUser || user);
  if (token) {
     navigate(from, { replace: true });
    console.log(user || googleUser);
  }
  let signupError;
  if (error || googleError || updateError) {
    signupError = (
      <p className="text-red-600 text-center">
        {error?.message || googleError?.message || updateError?.message}
      </p>
    );
  }
  const handleSignIn=()=>{
    signInWithGoogle();
  }
  const onSubmit =async (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({displayName:data.name})
     console.log("Updated");
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
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password here"
              class="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is reqiured",
                },
                minLength: {
                  value: 6,
                  message: "Password must be more than 6 charecters",
                },
              })}
            />
            <label class="label">
              {errors.password?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span class="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="btn w-1/2 flex justify-center ml-40 rounded-full  hover:border-2 hover:bg-transparent hover:text-secondary bg-secondary text-white  "
          />
          {signupError}
        </form>
        <p className="text-center font-semibold my-3">
          Already Have an account?
          <Link to="/login" className="text-secondary ">
            Log in
          </Link>
        </p>
        <div class="divider w-3/12 mx-auto">OR</div>
        <button
          onClick={handleSignIn}
          className="flex justify-center mx-auto hover:border-2 hover:bg-transparent hover:text-secondary bg-secondary text-white  rounded-full p-3"
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Signup;