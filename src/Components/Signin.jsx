import React, { useState } from 'react';

const Signin = () => {

    const method =() =>{
        return (
            alert(`You are Sigin in `)
        )
    }

    return (
        <>
            <form action="action.php" onSubmit={method}>
            <div className=" flex justify-center  w-full h-screen bg-green-400 border-black">
                <div className="max-w-lg bg-white h-auto pl-12 mt-10 mb-44 border-black mx-auto rounded-lg ">
                    <p className=' text-4xl  text-black mt-10'>Sign In </p>
                    <p className='text-xl text-black mt-4'>Stay Updated On You profession World</p>

                    <input type="Email" className='w-96 mt-10 p-2 rounded-lg text-lg' placeholder='Email Or Phone' />
                    <input type="password" className='w-96 mt-10 p-2 rounded-lg text-lg' placeholder='Password' />
                    <div></div>
                    <span className=' inline-block mt-5 text-lg text-blue-700 font-bold'>Forget Password</span>
                    <div></div>
                    <button className='mt-10 w-96 py-2  rounded-full outline-none cursor-pointer bg-blue-700 border-none text-white  text-lg'>Sign in</button>

                    <pre className='text-black mt-10 ml-8'>---------------------OR---------------------</pre>

                    <div>

                        <button className='p-2 w-96 rounded-full mt-8 text-lg cursor-pointer ' >
                            Sigin with Apple
                        </button>
                        <p className='text-black mt-8 ml-10 text-lg'>New to Farmer? <button className='text-lg text-blue ml-2 rounded-full border-none bg-white text-blue-700 font-bold cursor-pointer'>Join Now</button></p>
                    </div>
                </div>
            </div>
            </form>
        </>
    )
}
export default Signin;