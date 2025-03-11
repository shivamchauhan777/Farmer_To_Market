import {React,useState} from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const Slide = () => {
    const [open,setOpen]=useState(false)
  return (
    <>
    <div className={`bg-green-600 h-full   ${open ? 'w-50':'w-0'} p-5 pt-8 relative duration-300`}>
        <BsArrowLeftShort className={`bg-white text-gray-400 text-3xl rounded-full absolute -right-3 top-9
        border border-gray cursor-pointer ${!open && "rotate-180"}` }
        
        onClick={()=> setOpen(!open)}/>
        <div className={`${open ? 'flex flex-col gap-y-3 text-2xl h-full':'hidden'}`}>
        <Link className="text-white  mt-16 cursor-pointer hover:text-red-700 no-underline text-3xl"  to="/ADMIN">Admin</Link>
        <Link className="text-white  mt-16 cursor-pointer hover:text-red-700 no-underline text-3xl" to="/USER">User</Link>
        <Link className="text-white  mt-16 cursor-pointer hover:text-red-700 no-underline text-3xl" to="/FEEDBACK">Feedback</Link>
        <Link className="text-white  mt-16 cursor-pointer hover:text-red-700 no-underline text-3xl" to="/SIGN UP">Sign up</Link>
        <Link className="text-white  mt-16 cursor-pointer hover:text-red-700 no-underline text-3xl" to="/SIGN_IN">Sign in</Link>
        <Link className="text-white  mt-16 cursor-pointer hover:text-red-700 no-underline text-3xl" to="/CART">Cart</Link>
        </div>
        </div>
    </>
  )
}

export default Slide;