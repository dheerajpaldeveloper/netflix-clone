'use client'
import React, { useState } from 'react'

export default function page() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    console.log("Test handle submit");
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Check if the response is ok
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error:', errorText);
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response :", data.data.role);
      
      if (!data.success) {
        setError(data.message || 'Invalid username or password');
      }
      if (response.ok) {
        console.log("res data", data.data.username);
        
        localStorage.setItem("username", data.data.username);
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("role", data.data.role);
        localStorage.setItem("id", data.data.id);
        window.location.href = "/";
        return;
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Something went wrong. Please try again.');
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full p-8 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Username</label>
          <input
            type="text"
            name="username"
            className="w-full p-2 border rounded"
            disabled={loading}
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  </div>
  )
}
