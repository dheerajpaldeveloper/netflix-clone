'use client';
import React, { useState } from 'react';

export default function Page() {
 const [username , setUsername] = useState('')
 const [password, setPassword] = useState('')

 const handleLogin = async (e: any) => {
  e.preventDefault();
  console.log(username, password)

  try {
    const res = await fetch("/api/login",{
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password})
    })
    console.log("user not login :",res)

    if(!res.ok){
      const response = await res.json();
      console.log("user not login 1:",response)
    }else{
      console.log("user login successfully")
      window.location.href = '/home'
    }
  } catch (error) {
    console.log("no resonse from server : ",error)
  }
 }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm ">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <label className="block mb-2">
          Username:
          <input
            type="username"
            className="w-full p-2 border rounded mt-1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label className="block mb-4">
          Password:
          <input
            type="password"
            className="w-full p-2 border rounded mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
        >
          Login
        </button>
      

        
      </form>

      <p>Or</p>

        <a href="./signup">

        <button
                  
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded my-2"
                >
                  sign up
                </button>
        </a>
      
    </div>
  );
}
