import React from "react";
const Login = () => {
  return (
    <form action="" className="w-[600px] flex flex-col m-4 ">
      <input
        type="text"
        className=" my-3 bg-gray-100 py-2 px-1"
        placeholder="Enter your name"
      />
      <button className="bg-blue-300 px-3 py-2">GO TO CHAT</button>
    </form>
  );
};

export { Login };
