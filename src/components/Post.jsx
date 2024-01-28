import React, { useState } from "react";
import axios from "axios";

const Post = () => {
  const [postData, setPostData] = useState({ title: "", body: "" });

  const handlePost = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        postData
      );
      console.log("Post successful:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
      <h1>POST Request Example</h1>
      <input
        type="text"
        placeholder="Title"
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Body"
        value={postData.body}
        onChange={(e) => setPostData({ ...postData, body: e.target.value })}
      />
      <button onClick={handlePost}>Post Data</button>
    </div>
  );
};

export default Post;
