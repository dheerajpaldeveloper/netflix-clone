"use client";
import React, { useState } from "react";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const response = await res.json();
        console.log("Login failed:", response);
      } else {
        console.log("Login successful");
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

      {/* Login Form */}
      <div className="relative z-10 flex justify-center items-center h-full px-4">
        <form
          onSubmit={handleLogin}
          className="bg-black bg-opacity-80 text-white p-10 rounded-md w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-6">Sign In</h2>

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

          <button
            type="submit"
            className="w-full bg-[rgb(229,9,20)] hover:bg-red-800 text-white font-semibold py-3 rounded"
          >
            Sign In
          </button>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-red-600" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

          <div className="mt-6 text-gray-400 text-sm">
            New to Netflix?{" "}
            <a href="/signup" className="text-white hover:underline">
              Sign up now.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
