"use client";
import React, { useState } from "react";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState("")

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    console.log("username and password : ",username, password)
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        setShowMessage("User already exist")
        setTimeout(() => {
          setShowMessage('')
        }, 4000);
        setUsername("");
        setPassword("");
      } else if(res.ok) {
        console.log("Sign up successful");
        window.location.href = "/home";
      }
    } catch (error) {
      console.log("Server error:", error);
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('banner.jpg')" }}
    >
      {/* Full black overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Netflix Logo */}
      <div className="absolute top-4 left-8 z-20">
        <h1 className="text-[rgb(229,9,20)] text-4xl font-extrabold tracking-wider">
          NETFLIX
        </h1>
      </div>

      {/* Sign Up Form */}
      <div className="relative z-10 flex justify-center items-center h-full px-4">
        <form
          onSubmit={handleSignUp}
          className="bg-black bg-opacity-80 text-white p-10 rounded-md w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

          <div className="mb-4">
            <input
              type="text"
              placeholder="username"
              className="w-full p-3 bg-[#333] text-white rounded focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-[#333] text-white rounded focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <span>{showMessage}</span>
          </div>
          <button
            type="submit"
            className="w-full bg-[rgb(229,9,20)] hover:bg-red-800 text-white font-semibold py-3 rounded"
          >
            Sign Up
          </button>

          <div className="mt-6 text-gray-400 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-white hover:underline">
              Sign in now.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
