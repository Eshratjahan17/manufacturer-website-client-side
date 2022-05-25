import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from "../Shared/Loading/Loading";

const Login = () => {
  //Hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let errorMessage;
  //navigation
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  //Google
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  //Email password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  //error
  if (error || googleError) {
    errorMessage = (
      <p className="text-red-600">{error?.message || googleError?.message}</p>
    );
  }
  //jwtToken
  const [token] = useToken(user || googleUser);
  if (loading || googleLoading) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate(from, { replace: true });
  }

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };

  const handleSignIn = async () => {
    await signInWithGoogle();
    //  .then(() => {
    //    navigate(from, { replace: true });
    //  });
  };
  return (
    <div>
      <h1 className="text-center text-3xl text-secondary font-bold mt-9 ">
        Log In
      </h1>
      <div className="border-x  ">
        <form className="w-1/2 mx-auto " onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
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
                  message: "error message",
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
          {/* errors will return when field validation fails  */}
          <input
            type="submit"
            value="Log In"
            className="btn w-1/2 flex justify-center ml-40  rounded-full  border-0 hover:border-2 hover:bg-transparent hover:text-secondary bg-secondary text-white "
          />
          {errorMessage}
        </form>
        <p className="text-center font-semibold my-3">
          Are You New Here?
          <Link to="/signup" className="text-secondary ">
            Create an Account
          </Link>
        </p>
        <div class="divider w-3/12 mx-auto">OR</div>
        <button
          onClick={handleSignIn}
          className="flex justify-center mx-auto hover:border-2 hover:bg-transparent hover:text-secondary bg-secondary text-white rounded-full p-3"
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;