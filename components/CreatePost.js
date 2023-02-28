import React, { useState } from "react";
import Image from "next/image";
import pick from "../public/images/img3.png";
import { BiImageAdd } from "react-icons/bi";

export default function CreatePost() {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  return (
    <div className="card">
      {image && (
        <div className="border rounded-md flex justify-center">
          <img src={image} alt="image-review" />
        </div>
      )}
      <div className="">
        <div className="my-3 flex space-x-2 item-center">
          <Image
            className="rounded-full"
            src={pick}
            alt="profile"
            width={40}
            height={30}
          />
          <input
            className="placeholder:text-slate-400 w-full block py-2 rounded-md border border-gray-200 bg-gray-100 focus:border-gray-300 focus:ring-0"
            placeholder="Write something creative"
            type="text"
            name="search"
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <label htmlFor="img" className="cursor-pointer flex">
              <BiImageAdd size={30} />
              <span>Image</span>
            </label>
            <input
              hidden
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={onImageChange}
            />
          </div>

          {image && (
            <div className="flex">
              <button
                className="border bg-white px-3 py-1 mx-2 rounded-md"
                onClick={() => {
                  setImage(null);
                }}
              >
                Cancel
              </button>

              <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
                Share
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
