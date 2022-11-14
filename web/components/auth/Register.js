import React from "react";
import axios from "~/api/axios";
import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    let temp = async () => {
      let res = await axios.get("/web-init");
      console.log(res);
    };
    temp();
  }, []);

  return (
    <div className="flex justify-center h-screen bg-[#f9fafb]">
      <div className="flex flex-col w-1/3 my-auto bg-white p-10 rounded-lg shadow-lg">
        <h1 className="mb-4 text-center">Login</h1>
        <div className="flex flex-col">
          <label htmlFor="email" className="w-80 mr-4 my-4 font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-3 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="w-80 mr-4 my-4 font-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="p-3 rounded-lg "
          />
        </div>
        <button className="w-full my-6 bg-[#2563eb] text-white p-3 rounded-lg font-bold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Register