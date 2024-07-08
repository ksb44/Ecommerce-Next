import React, { useEffect } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import  Router  from 'next/router';
function Forgot() {
  let [credential,setCredential]=useState({email:"",password:""});
  const handleSubmit=async(e)=>{
e.preventDefault()
const response=await fetch("https://ecommerce-next-x3mg.onrender.com/api/forgot",{
  method:"POST",
  headers:{
      "Content-Type":"application/json"
  },
  body:JSON.stringify({
  email:credential.email,password:credential.password
  })
})

let json=await response.json()
if(json.status){
  localStorage.setItem('accessToken',json.accessToken)
  Router.push('/')
  toast.success("Successfully forgot")


}
else {
  toast.error(`Error occured : ${json.msg}`)

}

  }
  useEffect(()=>{

    if(localStorage.getItem('accessToken')){
      Router.push('/')
    }
    
    },[])
  const handleChange=(e)=>{

    setCredential({...credential,[e.target.name]:e.target.value})
  }
    return (
        <div>

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>


    <p className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Or<a></a><Link href="/Signup" className='text-pink-700'> Signup</Link></p>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleSubmit} method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" onChange={handleChange} value={credential.email} name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password"  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <Link href="Forgot" className="font-semibold text-pink-600 hover:text-pink-500">Forgot password?</Link>
          </div>
        </div>
        <div className="mt-2">
          <input id="password"onChange={handleChange}  name="password" type="password" value={credential.password} autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Sign in</button>
      </div>
    </form>

  
  </div>
</div>

        </div>
    )
}
export default Forgot;
