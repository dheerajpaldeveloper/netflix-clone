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
        setChannelsData(result.data || []);
      } catch (err: any) {
        console.log(err.message || "Something went wrong");
      }
    };

    fetchChannelsData();
  }, []);

  return (
    <div className="flex flex-col m-6 overflow-y-auto">
      {/* Total Views and Users */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-4">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white border rounded-sm shadow-sm p-4 py-8"
          >
            <p className="text-xs font-bold text-blue-600">{user.id}</p>
            <p className="text-xl text-gray-500 mt-2 break-words">
              Total Users: {user.totalUsers}
            </p>
          </div>
        ))}
      </div>

      {/* Graph and Bar */}
      <div className="grid md:grid-cols-[60%_40%] grid-cols-1 gap-4 h-[500px] p-4 mb-4">
        <div className="flex w-full bg-gray-50 items-center shadow-sm justify-center">
          Total Revenue
        </div>
        <div className="flex w-full bg-gray-50 items-center shadow-sm justify-center">
          Profit this week
        </div>
      </div>


      {/* Map */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 h-[500px] p-4 mb-4">
        <div className="grid w-full bg-gray-50 items-center shadow-sm justify-center">
          Visitors Analytics
        </div>
        <div className="grid w-[100%] bg-gray-50 items-center shadow-sm justify-center">
          Region labels
        </div>
      </div>

      {/* Channels and Chats */}
      <div className="grid md:grid-cols-[60%_40%] grid-cols-1 gap-4 h-[500px] p-4 mb-4">
        <div className="flex w-full bg-gray-50 shadow-sm justify-center sm:overflow-x-auto md:overflow-x-auto">
          <table className="w-full rounded-4xl">
            <thead>
              <tr>
                <th className="bg-[#ecf1f6] py-4 font-light">ID</th>
                <th className="bg-[#ecf1f6] font-light">SOURCE</th>
                <th className="bg-[#ecf1f6] font-light">VISITORS</th>
                <th className="bg-[#ecf1f6] font-light">REVENUES</th>
                <th className="bg-[#ecf1f6] font-light">SALES</th>
                <th className="bg-[#ecf1f6] font-light">CONVERSION</th>
              </tr>
            </thead>
            <tbody>
              {channelsData.map((channel) => (
                <tr key={channel.id}>
                  <td className="px-4 py-2 border-t text-center">
                    {channel.id}
                  </td>
                  <td className="px-4 py-2 border-t text-center">
                    {channel.source}
                  </td>
                  <td className="px-4 py-2 border-t text-center">
                    {channel.visitors}
                  </td>
                  <td className="px-4 py-2 border-t text-center">
                    {channel.revenues}
                  </td>
                  <td className="px-4 py-2 border-t text-center">
                    {channel.sales}
                  </td>
                  <td className="px-4 py-2 border-t text-center">
                    {channel.conversion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex w-full bg-gray-50 items-center justify-center shadow-sm">
          chats
        </div>
      </div>
    </div>
  );
}
