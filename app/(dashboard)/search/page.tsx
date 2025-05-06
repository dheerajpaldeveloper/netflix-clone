"use client";
import React, { useState, useEffect } from "react";

const API_KEY = "2f32adab";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [titles, setTitles] = useState<string[]>([]);
  const [poster, setPoster] = useState<string[]>([]);

  const fetchApi = async (title: string) => {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        const allTitles = data.Search.map((movie: any) => movie.Title);
        const allPoster = data.Search.map((movie: any) => movie.Poster);
        setTitles(allTitles);
        setPoster(allPoster);
      } else {
        setTitles([]);
        setPoster([]);
      }
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      fetchApi(searchTerm);
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-col items-center pt-8 px-4">
      <label className="mb-2 text-lg font-semibold">Search Movies:</label>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-2 rounded-md px-3 py-2 w-full max-w-md mb-6"
      />

      <div className="w-full max-w-6xl">
        {titles.length > 0 ? (
          <div className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 border border-b-cyan-600 h-1/4 py-4 overflow-y-auto gap-4">
            {titles.map((title, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white border rounded-md p-3 shadow hover:shadow-lg transition"
              >
                {poster[index] !== "N/A" ? (
                  <img
                    src={poster[index]}
                    alt={title}
                    className="p-2 text-center border transform transition-transform duration-300 hover:scale-110 cursor-zoom-in"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-2 rounded">
                    <span className="text-sm text-gray-500">No Image</span>
                  </div>
                )}
                <p className="text-center font-medium text-sm">{title}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No results found</p>
        )}
      </div>
    </div>
  );
}
