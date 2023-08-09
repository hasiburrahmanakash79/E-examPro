import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Authentication.css";
import SocialLogin from "../../../Hooks/SocialLogin/SocialLogin";

const Login = () => {
  //code verification
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [isButtonEnable, setIsButtonEnable] = useState(false);

  useEffect(() => {
    const newRandomNumbers = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 10)
    );
    setRandomNumbers(newRandomNumbers);
  }, []);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setIsButtonEnable(event.target.value === randomNumbers.join(""));
  };
  //verification end

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="Auth_bg">
      <div className="hero min-h-screen">
        <div className="md:flex justify-between items-center gap-12 px-3">
          <div className="md:w-1/2">
            <img src="https://i.ibb.co/jDMz1bj/login-page-banner.png" alt="" />
          </div>
          <div className="md:w-1/2 rounded-lg card border border-black flex-shrink-0 w-full shadow-xl backdrop-blur-sm bg-transparent">
            <div className=" text-center">
              <h1 className="text-4xl my-5 font-bold text-white">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500 mt-1">
                      Email field is required
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <span className="text-red-500 mt-1">
                      Password field is required
                    </span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control ">
                  <input
                    disabled={!isButtonEnable}
                    className="btn btn-primary "
                    type="submit"
                    value={"Login"}
                  />
                </div>
              </form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <p className="text-center bg-green-500 text-white w-1/3 md:w-full px-2 py-1 rounded-lg mx-auto">
                  {" "}
                  {randomNumbers.join(" ")}
                </p>
                {/* varification input field */}
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Type Number"
                  className="input input-sm w-[117px] md:w-full mx-auto input-bordered"
                />
              </div>
              <div className="text-center mb-7">
                <div className="divider divide-red-50"></div>
                <p className="font-semibold">Or Sign In with</p>
                <div className="flex items-center justify-center gap-4 my-2">
                  <SocialLogin></SocialLogin>
                </div>
                <p className="text-center">
                  Don't Have Any Account?{" "}
                  <Link className="link link-hover" to="/signUp">
                    Click Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
