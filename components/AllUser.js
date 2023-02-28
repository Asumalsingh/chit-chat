import React from "react";
import Image from "next/image";
import pick1 from "../public/images/img1.png";
import pick2 from "../public/images/img2.png";
import pick3 from "../public/images/img3.png";

export default function AllUser() {
  const data = [
    { name: "Asumal", username: "asumal", image: pick1, following: false },
    { name: "Singh Sahab", username: "singh", image: pick2, following: false },
    {
      name: "Utsav Singh",
      username: "utsav_ind",
      image: pick3,
      following: false,
    },
    { name: "Asumal", username: "asumal", image: pick1, following: false },
    { name: "Asumal", username: "asumal", image: pick1, following: false },

    
  ];
  return (
    <div className="card">
      {data.map((item, index) => {
        return (
          <div key={index} className="flex justify-between py-2 items-center">
            <div className="flex items-center">
              <Image src={item.image} alt="user_img" width={40} height={40} />
              <div className="ml-2">
                <p className="text-xs font-semibold">{item.name}</p>
                <p className="text-xs text-gray-600">@{item.username}</p>
              </div>
            </div>
            <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded-md">
              {item.following ? "Following" : "Follow"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
