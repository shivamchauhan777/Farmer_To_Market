import React, { useState } from "react";

const Signup = () => {
  return (
    <>
      <div className=" flex justify-center  w-full h-screen bg-green-400 border-black">
        <div className="max-w-lg bg-white  px-10 mt-10 mb-36 border-black mx-auto rounded-lg ">
          <p className="text-black text-4xl mt-10 ml-32 border-4 border-white  ">Sign Up</p>
          <p className="text-black mt-2 ml-28 text-lg">Sign up to continue</p>
          <input type="text" className='w-96 mt-10 p-2 rounded-lg text-lg' placeholder="Name" />
          <input type="password" className='w-96 mt-10 p-2 rounded-lg text-lg' placeholder="Email" />
          <input type="password" className='w-96 mt-10 p-2 rounded-lg text-lg' placeholder="Password" />
          <button className='w-96 mt-10 p-2 rounded-lg text-lg bg-blue-700 text-white cursor-pointer'>Sign Up</button>
          <div></div>
          <input type="checkbox" name="" id="" className="mt-9 ml-4" />
          <span className="text-black pl-3">Remember Me?</span>

          <pre className="text-black mt-8 ">--------------------- Acess Quickly ---------------------</pre>

          <div className="mt-5 ">
            <button className="ml-10 px-4 py-2 outline-none border-none bg-gray-300 rounded-lg cursor-pointer">Google</button>
            <button className="ml-10 px-4 py-2 outline-none border-none bg-gray-300 rounded-lg cursor-pointer">Linked In</button>
            <button className="ml-10 px-4 py-2 rounded-lg outline-none border-none bg-gray-300 cursor-pointer">Facebook</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Signup;