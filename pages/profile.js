import React from "react";
import ProfileComponent from "../components/Profile";
import CreatePost from "../components/CreatePost";
import Content from "../components/Content";

export default function Profile() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
      <div className="mb-4 col-span-1">
        <ProfileComponent />
      </div>
      <div className="col-span-2">
        <CreatePost />
        <Content />
      </div>
    </div>
  );
}
