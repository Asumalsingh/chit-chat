import React from "react";
import pick from "../public/images/img3.png";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="card w-full text-center">
      <div className="flex justify-center">
        <Image src={pick} alt="profile-image" width={80} />
      </div>

      <p className="text-xl font-semibold mt-3">Asumal</p>
      <p className="text-gray-600">Full stack developer</p>
      <hr className="mt-5" />
      <div className="flex justify-between p-2">
        <div className="cursor-pointer group">
          <p className="font-semibold text-sm">132</p>
          <p className="text-xs group-hover:text-blue-500">Following</p>
        </div>
        <div
          className="cursor-pointer group"
          onClick={() => {
            console.log("alskdjf");
          }}
        >
          <p className="font-semibold text-sm">12</p>
          <p className="text-xs group-hover:text-blue-500">Followers</p>
        </div>
      </div>
      <hr className="mb-5" />

      <div className="flex justify-between">
        <button className="text-black font-semibold text-sm bg-gray-100 py-2 px-4 rounded-md">
          Edit Profile
        </button>
        <button className="text-red-500 font-semibold text-sm bg-red-50 py-2 px-4 rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
}
