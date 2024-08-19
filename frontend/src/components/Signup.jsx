import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
         <div id="" className="w-[600px]">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input type='text' placeholder='enter your fullname' className='w-80 px-3 border rounded-md outline-none'/>
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type='email' placeholder='enter your email' className='w-80 px-3 border rounded-md outline-none'/>
    </div>
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type='password' placeholder='enter your password' className='w-80 px-3 border rounded-md outline-none'/>
    </div>
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200'>Signup</button>
        <p>already have an account <Link to='/' className='underline text-blue-600 cursor-pointer'>Login</Link></p>
    </div>
   
  </div>
</div>
      
    </div>
  )
}

export default Signup
