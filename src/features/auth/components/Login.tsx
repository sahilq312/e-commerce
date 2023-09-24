
import React, { useState } from 'react';
import { loginUserAsync, USERDATA } from '../authSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { Navigate } from 'react-router-dom';

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
       {loginStatus && <Navigate to="/" replace={true}></Navigate>}
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

