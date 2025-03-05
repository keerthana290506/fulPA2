// import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <div className="flex items-center mb-2">
        <img
          src={post.profileImage}
          alt={post.username}
          className="w-12 h-12 rounded-full mr-3"
        />
        <h2 className="text-lg font-bold">{post.username}</h2>
      </div>
      <p className="text-gray-700">{post.content}</p>
      <div className="mt-2">
        <LikeButton />
      </div>
    </div>
  );
};

export default PostCard;
