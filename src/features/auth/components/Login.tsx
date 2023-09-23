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
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  {...register("email")}
                  placeholder="Kotaro"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors?.email && <p>{errors.email.message}</p>}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  {...register("password")}
                  placeholder="password@hotmail.com"
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
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

