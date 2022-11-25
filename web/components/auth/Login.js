import React from "react";
import axios from "../../api/axios";
import { useEffect, useState } from "react";
import { setUserInfo,setToken,getToken } from "../../utils/hash";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    let callApiLogin = async () => {
      let res = await axios.post("/auth/login", {
        email: email,
        password: password,
      });
      //console.log(res);
      if (res.data.status === "success") {
        console.log("Login success");
        let userInfo = res.data.user;
        setUserInfo(userInfo);
        setToken(res.data.authorisation.token);
      }
    };
    callApiLogin();
  };

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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full my-6 bg-[#2563eb] text-white p-3 rounded-lg font-bold"
          onClick={() => handleLogin()}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
