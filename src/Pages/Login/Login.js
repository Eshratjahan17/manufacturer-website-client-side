import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {console.log(data);}
  return (
    <div className="w-1/2 mx-auto">
      <h1> log in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
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
            <span class="label-text-alt">Alt label</span>
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
            <span class="label-text-alt">Alt label</span>
          </label>
        </div>

        <input />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          type="submit"
          value="Log In"
          className="btn w-full max-w-xs text-white"
        />
      </form>
    </div>
  );
};

export default Login;