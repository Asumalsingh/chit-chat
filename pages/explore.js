import React from "react";
import Search from "../components/Search";
import AllUser from "../components/AllUser";

export default function Explore() {
  return (
    <div className="flex justify-center ">
      <div className="w-96">
        <Search />
        <div className="my-2">
          <AllUser />
        </div>
      </div>
    </div>
  );
}
