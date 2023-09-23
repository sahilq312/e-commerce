<<<<<<< Updated upstream
/* import { useForm } from "react-hook-form";
import { USERDATA, loginUserAsync } from "../authSlice";
import { useAppDispatch } from "../../../app/hooks";



export const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<USERDATA>();

  const onSubmit = (data: USERDATA) => {
    console.log(data);
    
    dispatch(loginUserAsync(data))
=======
//import { loginUserAsync } from "../authSlice";

import { useState, useEffect } from "react";


export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  
  useEffect(() => {
    
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user);
   
>>>>>>> Stashed changes
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src=""
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              {" "}
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
              </div>
            </div>
            <div className="mt-2">
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          {" "}
          Not a member?{" "}
          <a
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );

};
 */
import React, { useState } from 'react';
import { loginUserAsync, USERDATA } from '../authSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';

export const Login = () => {
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector((state) => state.auth.loggedInUserToken);
  const [userData, setUserData] = useState<USERDATA>({ email: '', password: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    dispatch(loginUserAsync(userData));
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={userData.password}
        onChange={handleInputChange}
      />
      <button onClick={handleLogin}>Login</button>
      {loginStatus === 'loading' && <p>Loading...</p>}
      {loginStatus === 'failed' && <p>Login failed. Please check your credentials.</p>}
      {loginStatus === 'succeeded' && <p>Login successful!</p>}
    </div>
  );
};

