import React, { useState } from "react";
import Image from "next/image";
import ChitChat from "../public/images/chit-chat.png";
import pick from "../public/images/img3.png";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <nav className="w-full px-5 py-2 flex justify-between items-center bg-white shadow-sm h-14 fixed">
      <Link href="/">
        <Image
          src={ChitChat}
          alt="logo"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </Link>
      <div className="flex">
        <Link
          href="/explore"
          className="bg-blue-500 py-1 flex items-center px-3 rounded-md mr-5 lg:hidden"
        >
          <BiSearch size={20} color="white" />
        </Link>

        <Link href="/profile">
          <Image
            src={pick}
            alt="profile-image"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </nav>
  );
}
