import React from "react";

function LandingPage() {
  return (
    <div
    className="relative w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('banner.jpg')" }}
  >
    {/* Light black overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80" />
      {/* Header */}
      <div className="relative flex justify-between items-center px-16 py-6">
        <h1 className="text-[#e50914] text-4xl font-extrabold tracking-wide uppercase font-sans">
          Netflix
        </h1>

        <div className="flex gap-4">
          <button className="border border-white text-white py-1 px-4 rounded-sm text-sm hover:bg-white hover:text-black transition">
            English
          </button>
          <a href="/login">
            <button className="bg-[#e50914] hover:bg-[#b20710] text-white py-1 px-4 rounded-sm text-sm transition">
              Sign in
            </button>
          </a>
        </div>
      </div>
      {/* center containt */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
        <p className="text-6xl font-bold">Unlimited movies, TV</p>
        <p className="text-6xl font-bold">shows and more</p>
        <p className="text-2xl font-bold py-4">Starts at ₹149. Cancel at any time.</p>
        <p className="pt-2 pb-4">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="flex justify-center  w-full gap-4">
          <input type="text" placeholder="Email address" className="border w-full pl-4 text-xl rounded-sm"/>
          <button className="bg-[#e50914] hover:bg-[#b20710] text-white py-1 font-bold px-14 rounded-sm transition">Get Started</button>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;
