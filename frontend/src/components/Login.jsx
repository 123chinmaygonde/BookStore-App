import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {
    const {
        register,
        handleSubmit,
       
        formState:{errors},
    }= useForm();
    const onSubmit = (data) => {
        console.log(data); // Handle form submission here
    };

   
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type='email' placeholder='enter your email' className='w-80 px-3 border rounded-md outline-none'  {...register("email", { required: true })}/>
    </div>
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type='password' placeholder='enter your password' className='w-80 px-3 border rounded-md outline-none'  {...register("password", { required: true })}/>
    </div>
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200'>Login</button>
        <p>not registered? <Link to='/signup' className='underline text-blue-600 cursor-pointer'>Signup</Link></p>
    </div>
   
  </div>
</dialog>
      
    </div>
  )
}

export default Login
