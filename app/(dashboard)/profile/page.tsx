"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";
import { NextResponse } from "next/server";
import { IoCloseSharp } from "react-icons/io5";

export default function page() {
  const [data, setData] = useState<[]>([]);
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [profile, setProfile] = useState(false);
  const [profileUsername, setProfileUsername] = useState<string>("");
  const [profileRole, setProfileRole] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storeRole = localStorage.getItem("role");
    const storeId = localStorage.getItem("id");
    const storeProfileUrl = localStorage.getItem("profilePic")

    if (storedUsername) {
      setUsername(storedUsername);
    }
    if (storeRole) {
      setRole(storeRole);
    }
    if (storeId) {
      setId(storeId);
    }
    if(storeProfileUrl){
      setPreviewUrl(storeProfileUrl)
    }
  }, []);

  useEffect(() => {
    const fetchProfileData = async () => {
      const storedUsername = localStorage.getItem("username");

      try {
        const profileResonse = await fetch("/api/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!profileResonse.ok) {
          throw new Error("Failed to fetch user data");
        } else {
          const profileData = await profileResonse.json();
          const checkUser = profileData.data.find(
            (user: any) => user.username === storedUsername
          );
          setProfileUsername(checkUser.username);
          setProfileRole(checkUser.role);
        }
      } catch (error) {
        return NextResponse.json(
          { success: false, message: "Internal server error" },
          { status: 500 }
        );
      }
    };
    fetchProfileData();
  }, []);

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

  function handleEditProfile() {
    setProfile(!profile);
  }
  function closeProfileButton() {
    setProfile(!profile);
  }

  const handleProfileForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formdata = new FormData();

    // Append values manually
    const profileUsername = form.profileUsername.value;
    const profileRole = form.profileRole.value;

    formdata.append("profileUsername", profileUsername);
    formdata.append("profileRole", profileRole);
    formdata.append("id", id);
    
    if (file) {
      formdata.append("profilePic", file);
    }
    console.log("file : ",file)

    try {
      const res = await fetch("/api/profileupdate", {
        method: "POST",
        body: formdata,
      });
      if (!res.ok) {
        console.log("Error uploading data");
      } else {
        const resData = await res.json();
        const imageUrl = resData.data[0]?.image_url;
        localStorage.setItem("profilePic",imageUrl);
        const savedPic = localStorage.getItem("profilePic");
        console.log("savedPic : ",savedPic)
        
        setProfileUsername(profileUsername);
        setProfileRole(profileRole);
        setPreviewUrl(savedPic);
        setProfile(false)
      }
    } catch (error) {
      console.log("catch error", error);
    }
      setProfile(!profile);
  };
  return (
    <div className="flex flex-col mx-28 my-12 h-[100%]">
      <div className="flex justify-between  py-4">
        <div>
          <h1 className="text-xl font-semibold">Profile</h1>
        </div>
        <div className="flex">
          <a href="/" className="mr-1">
            Dashboard{" "}
          </a>
          <h1>/</h1>
          <h1 className="text-blue-900 ml-1 font-light">Profile</h1>
        </div>
      </div>
      <div className="relative flex flex-col h-full">
        <div className='relative h-[40%] bg-[url("/cover-01.png")] bg-cover bg-center'>
          <button
            onClick={handleEditProfile}
            className="flex items-center gap-1 absolute bottom-6 right-4 bg-gray-600 px-2 text-white py-1 rounded shadow"
          >
            <MdOutlineCameraAlt size={20} /> Edit
          </button>
          {profile && (
            <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-6 z-50">
              <form onSubmit={handleProfileForm}>
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                    Edit Profile
                  </h2>
                  <span
                    className="flex items-center text-xl border px-2 py-1 rounded-sm shadow hover:bg-gray-100 transition"
                    onClick={closeProfileButton}
                  >
                    <IoCloseSharp />
                  </span>
                </div>

                {/* Username Field */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    name="profileUsername"
                    value={profileUsername}
                    onChange={(e) => setProfileUsername(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Role Field */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Role
                  </label>
                  <select
                    name="profileRole"
                    value={profileRole}
                    onChange={(e) => setProfileRole(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="select">Select</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Upload picture
                  </label>
                  <input
                    type="file"
                    name="profilePic"
                    onChange={(e) => {
                      const selected = e.target.files?.[0] || null;
                      setFile(selected);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
        {/* Avatar Container - Relative for absolute positioning inside */}
        <div className="relative h-[60%] bg-[#ffffff]">
          {/* Avatar wrapper */}
          <div className="absolute border-2 left-1/2 top-[0%] transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-40 h-40 flex items-center justify-center">
            {/* Hidden file input */}
            <input type="file" id="avatar-upload" className="hidden" />
             {/* Show preview image */}
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Profile Preview"
                  className="w-full h-full object-cover rounded-full zoom-in-100"
                />
              ) : (
                // Optional: default placeholder
                <span className="text-gray-400">No Image</span>
              )}
            {/* Camera Icon - Positioned at bottom right of avatar */}
            <label
              htmlFor="avatar-upload"
              className="absolute bottom-2 right-2 bg-blue-600 p-1 rounded-full cursor-pointer z-20"
            >
              <MdOutlineCameraAlt size={20} color="white" />
            </label>
          </div>

          {/* Placeholder content below avatar */}
          <div className="flex flex-col justify-center items-center mt-28">
            <div className="flex flex-col gap-2">
              {/* <input
                type="username"
                className="w-2xs rounded-md border-2 pl-1"
                placeholder="username"
              /> */}
              <div className="border px-4 rounded-sm bg-gray-600 text-gray-50">
                <span className="font-light text-md">Username: </span>
                {username}
              </div>
              <div className="border px-4 rounded-sm bg-gray-600 text-gray-50">
                <span className="font-light text-md">Role: </span>
                {role}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-6">
              <h1 className="font-light">About me</h1>
              <div className="px-32 font-extralight text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi voluptates libero odit dolorum officiis vitae illo
                quibusdam, velit, assumenda et eum architecto ullam placeat.
                Itaque ipsam error, minus animi sunt provident ipsa eligendi
                reprehenderit! Voluptatem aspernatur totam fuga dolorum ipsum
                consequatur quos, nihil vero omnis esse, dolore, itaque
                temporibus veritatis!
              </div>
            </div>
            <div>Follow me on</div>
            <div className="flex gap-4 mt-2 text-gray-600 text-xl">
              <a
                href="https://www.facebook.com "
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiFacebookFill />
              </a>
              <a
                href="https://www.twitter.com "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.github.com "
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiGithubFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
