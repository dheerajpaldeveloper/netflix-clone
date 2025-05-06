"use client";
import React, { useEffect, useState } from "react";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=2f32adab&s=titanic";

export default function page() {
  const [data, setData] = useState<any[]>([]);
  const [bannerImage, setBannerImage] = useState("");
  const [title, setTitle] = useState("");

  const getMovie = async (url: any) => {
    try {
      const res = await fetch(url);
      const result = await res.json();
      console.log("result : ", result.Search);
      if (result.Response === "True") {
        setData(result.Search);
      }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    getMovie(API_URL);
  }, []);

  const handleBannerImage = (poster: string, title: any) => {
    setBannerImage(poster);
    setTitle(title);
  };

  return (
    <div className="flex flex-col bg-black border-4 h-screen">
      <div className="relative w-full border h-1/3">
        {/* Banner Image */}
        <img
          src={bannerImage}
          // alt="Banner"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />

        {/* Title + Buttons at Bottom Left */}
        <div className="absolute bottom-4 left-4 z-10 flex flex-col items-start gap-2">
          <h1 className="text-white text-2xl font-bold">{title}</h1>
          <div className="flex gap-4">
            <button className="bg-red-800 text-white rounded-full px-7 py-3 font-light">
              Play
            </button>
            <button className="bg-gray-100 text-black rounded-full px-7 py-3 font-light">
              Watch Later
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-2xl pl-2 text-white">New this week</h1>
      </div>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 border h-1/3 py-2 overflow-y-auto gap-4">
        {data.map((newMovie: any, index: number) => (
          <div
            onClick={() => handleBannerImage(newMovie.Poster, newMovie.Title)}
            key={index}
            className="p-2 text-center border transform transition-transform duration-300 hover:scale-110 cursor-zoom-in"
          >
            <p className="text-sm font-medium text-white">{newMovie.Title}</p>
            <img
              src={newMovie.Poster}
              className="w-full h-40 object-cover mt-2"
            />
          </div>
        ))}
      </div>
      <div>
        <h1 className="font-bold text-2xl pl-2 text-white">Trending Now</h1>
      </div>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 border h-1/3 py-2 overflow-y-auto gap-4">
        {data.map((newMovie: any, index: number) => (
          <div
            onClick={() => handleBannerImage(newMovie.Poster, newMovie.Title)}
            key={index}
            className="p-2 text-center border transform transition-transform duration-300 hover:scale-110 cursor-zoom-in"
          >
            <p className="text-sm font-medium text-white">{newMovie.Title}</p>
            <img
              src={newMovie.Poster}
              className="w-full h-40 object-cover mt-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
