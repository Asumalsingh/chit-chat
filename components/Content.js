import React from "react";
import Pick1 from "../public/images/postpic1.jpg";
import Pick2 from "../public/images/postpic2.jpg";
import Pick3 from "../public/images/postpic3.JPG";
import Pick4 from "../public/images/img4.jpg";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function Content() {
  const data = [
    {
      userName: "Asumal",
      caption: "lkasd jfa;sd",
      likes: 233,
      liked: true,
      imgUrl: Pick1,
    },
    {
      userName: "Utsav",
      caption: "lkasd jfa;sd",
      likes: 3,
      liked: false,
      imgUrl: Pick2,
    },
    {
      userName: "Mrigank",
      caption: "lkasd jfa;sd",
      likes: 23,
      liked: true,
      imgUrl: Pick3,
    },
    {
      userName: "Mrigank",
      caption: "lkasd jfa;sd",
      likes: 23,
      liked: true,
      imgUrl: Pick4,
    },
  ];
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className="card my-5">
            <div>
              <Image
                className="rounded-md"
                src={item.imgUrl}
                width={2000}
                height={1}
                alt="Image"
              />
            </div>

            <div className="flex my-2 items-center">
              {item.liked ? (
                <AiFillHeart
                  size={40}
                  className="text-red-500 cursor-pointer"
                />
              ) : (
                <AiOutlineHeart
                  size={40}
                  className="text-gray-700 cursor-pointer"
                />
              )}
              <span className="pl-1">{item.likes} Likes</span>
            </div>

            <p>
              <span className="font-semibold text-lg">{item.userName} </span>{" "}
              {item.caption}
            </p>
          </div>
        );
      })}
    </>
  );
}
