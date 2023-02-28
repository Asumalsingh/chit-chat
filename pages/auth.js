import React, { useState } from "react";
import { FaPrayingHands } from "react-icons/fa";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="mr-10 text-center">
          <div className="flex justify-center text-pink-600">
            <FaPrayingHands size={100}  />
          </div>
          <p className="text-3xl font-semibold mb-2">Welcome to</p>
          <h1 className="text-5xl font-bold text-pink-600">CHIT-CHAT</h1>
        </div>
        <div>
          {isLogin ? (
            // Login code
            <div className="card w-96">
              <div className="flex justify-center mb-5">
                <h1 className="font-bold text-2xl">Login</h1>
              </div>

              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="w-full my-2 py-3 rounded-md border border-gray-200 bg-gray-100 focus:border-gray-300 focus:ring-0 "
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full my-2 py-3 rounded-md border border-gray-200 bg-gray-100 focus:border-gray-300 focus:ring-0 "
              />

              <button className="bg-blue-500 text-white rounded-lg w-full px-4 py-3 my-4">
                Login
              </button>

              <p>
                {" "}
                Don't have an account,{" "}
                <button
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setIsLogin(false)}
                >
                  Create one
                </button>
              </p>
            </div>
          ) : (
            // Login code
            <div className="card w-96">
              <div className="flex justify-center mb-5">
                <h1 className="font-bold text-2xl">Sign up</h1>
              </div>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full my-2 py-3 rounded-md border border-gray-200 bg-gray-100 focus:border-gray-300 focus:ring-0 "
              />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="w-full my-2 py-3 rounded-md border border-gray-200 bg-gray-100 focus:border-gray-300 focus:ring-0 "
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full my-2 py-3 rounded-md border border-gray-200 bg-gray-100 focus:border-gray-300 focus:ring-0 "
              />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full my-2 py-3 rounded-md border border-gray-200 bg-gray-100 focus:border-gray-300 focus:ring-0 "
              />

              <button className="bg-blue-500 text-white rounded-lg w-full px-4 py-3 my-4">
                Sign up
              </button>

              <p>
                Already have an account,{" "}
                <button
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Login here
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
