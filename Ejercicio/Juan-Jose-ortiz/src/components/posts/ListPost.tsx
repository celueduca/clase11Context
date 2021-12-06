import React from "react";
import fakeApi from "../../api/fakePosts.json";
import CardPost from "./CardPost";

const ListPost = () => {
  return (
    <div className="ListPosts">
      {fakeApi.map((post, i) => (
        <CardPost key={i} post={post} />
      ))}
    </div>
  );
};

export default ListPost;
