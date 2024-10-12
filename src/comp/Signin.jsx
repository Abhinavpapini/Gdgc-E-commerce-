import React from "react";
import { useForm } from "react-hook-form";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleUserLogin(data) {
    console.log("Login Data:", data);
  }

  return (
    <div>
      <h1 className="display-3 text-center">Login</h1>
      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleUserLogin)}
      >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            {...register("username", { required: true })}
            className="form-control"
            id="username"
            placeholder="Enter your username"
          />
          {errors.username && (<p className="text-danger"> * Username is required</p> )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="form-control"
            id="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="text-danger">Password is required</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signin;
