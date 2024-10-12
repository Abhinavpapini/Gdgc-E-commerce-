import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  function handleFormSubmit(newUser) {
    console.log("New User:", newUser);
    fetch("http://localhost:3000/user",{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
    .then((res) =>{
      if(res.status === 201){
        navigate("/signin");  
      }
    })
    .catch((err) => console.log(err));
    
  }

  return (
    <div className="container">
      <h1 className="display-3 text-center">Register</h1>
      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            {...register("username", { required: true })}
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
          {errors.username && (
            <span className="text-danger">Name is required</span>
          )}
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
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-danger">Email is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth:
          </label>
          <input
            type="date"
            {...register("dob", { required: true })}
            className="form-control"
            id="dob"
          />
          {errors.dob && (
            <span className="text-danger">Date of Birth is required</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
