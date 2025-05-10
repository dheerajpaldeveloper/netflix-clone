"use client";

import React, { useEffect, useState } from "react";

interface User {
  id: number;
  totalUsers: string;
}

interface Channel {
  id: number;
  source: string;
  visitors: number;
  revenues: number;
  sales: number;
  conversion: number;
}

export default function Page() {
  const [data, setData] = useState<User[]>([]);
  const [channelsData, setChannelsData] = useState<Channel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/userTable", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error("Failed to fetch user data");

        const result = await res.json();
        setData(result.data || []);
      } catch (err: any) {
        console.log(err.message || "Something went wrong");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchChannelsData = async () => {
      try {
        const res = await fetch("/api/channels", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error("Failed to fetch channel data");

        const result = await res.json();
        console.log("channel result:", result);
        setChannelsData(result.data || []);
      } catch (err: any) {
        console.log(err.message || "Something went wrong");
      }
    };

    fetchChannelsData();
  }, []);

  return (
    <div className="flex flex-col border-black border-2 m-6 overflow-y-auto">
      {/* Total Views and Users */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-4">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white border-2 border-red-800 shadow-3xl p-4"
          >
            <p className="text-xs font-bold text-blue-600">{user.id}</p>
            <p className="text-xl text-gray-500 mt-2 break-words">
              Total Users: {user.totalUsers}
            </p>
          </div>
        ))}
      </div>

      {/* Graph and Bar */}
      <div className="flex md:grid-cols-1 lg:grid-cols-2 gap-4 border-2 border-amber-950 h-[400px] p-4 mb-4">
        <div className="flex w-full border-2 border-green-800 items-center justify-center">
          Total Revenue
        </div>
        <div className="flex w-[60%] border-2 border-green-800 items-center justify-center">
          Profit this week
        </div>
      </div>

      {/* Map */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 border-2 border-amber-950 h-[400px] p-4 mb-4">
        <div className="grid w-full border-2 border-green-800 items-center justify-center">
          Visitors Analytics
        </div>
        <div className="grid w-[100%]  border-2 border-green-800 items-center justify-center">
          Region labels
        </div>
      </div>

      {/* Channels and Chats */}
      <div className="flex gap-4 border-2 border-amber-950 h-[400px] p-4 mb-4">
        <div className="flex w-full border-2 border-green-800">
        <table className="w-full border border-green-900 rounded-4xl">
          <thead>
            <tr>
              <th className="border border-green-900">ID</th>
              <th className="border border-green-900">SOURCE</th>
              <th className="border border-green-900">VISITORS</th>
              <th className="border border-green-900">REVENUES</th>
              <th className="border border-green-900">SALES</th>
              <th className="border border-green-900">CONVERSION</th>
            </tr>
          </thead>
          <tbody>
            {channelsData.map((channel) => (
              <tr key={channel.id}>
                <td className="border border-green-900">{channel.id}</td>
                <td className="border border-green-900">{channel.source}</td>
                <td className="border border-green-900">{channel.visitors}</td>
                <td className="border border-green-900">{channel.revenues}</td>
                <td className="border border-green-900">{channel.sales}</td>
                <td className="border border-green-900">{channel.conversion}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className="flex w-[60%] border-2 border-green-800 items-center justify-center">
            chats
        </div>
      </div>
    </div>
  );
}
